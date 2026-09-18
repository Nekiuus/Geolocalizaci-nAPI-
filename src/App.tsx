
import './App.css'
import { useCallback, useEffect, useState } from 'react'
import LocationDetail from './components/LocationDetail'
import LocationList from './components/LocationList'
import SearchBar from './components/SearchBar'
import StatusMessage from './components/StatusMessage'
import type { Location, RequestStatus } from './types/api'

const IPS = [
  '8.8.8.8',
  '8.8.4.4',
  '1.1.1.1',
  '1.0.0.1',
  '9.9.9.9',
  '149.112.112.112',
  '208.67.222.222',
  '208.67.220.220',
  '4.2.2.1',
  '4.2.2.2',
  '4.2.2.3',
  '4.2.2.4',
  '64.6.64.6',
  '64.6.65.6',
  '77.88.8.8',
  '77.88.8.1',
  '94.140.14.14',
  '94.140.15.15',
  '180.76.76.76',
  '1.1.1.2',
]

// Consulta las veinte IPs y devuelve sus respuestas.
const fetchLocations = () =>
  Promise.all(
    IPS.map((ip) =>
      fetch(`/ip-api/${ip}`).then((response) => {
        // Verificamos que el servidor haya respondido correctamente.
        if (!response.ok) throw new Error('Error en la respuesta')
        return response.json() as Promise<Location>
      }),
    ),
  )

function App() {
  const [locations, setLocations] = useState<Location[]>([])
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([])
  const [search, setSearch] = useState('')
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [favorites, setFavorites] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem('favorites') || '[]'),
  )
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('loading')

  const loadLocations = useCallback(() => {
    setRequestStatus('loading')

    fetchLocations()
      .then((data) => {
          // Conservamos únicamente las respuestas válidas de la API.
        const successfulLocations = data.filter(
          (location) => location.status === 'success',
        )
        setLocations(successfulLocations)

        // Si no hay resultados, mostramos el estado "sin resultados".
        setRequestStatus(successfulLocations.length ? 'success' : 'empty')
      })
      // Si falla la conexión o la consulta, mostramos el estado de error.
      .catch(() => setRequestStatus('error'))
  }, [])

  // Persistencia: los favoritos se mantienen aunque se recargue la página.
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  // Marca o desmarca una IP de la lista de favoritos.
  const toggleFavorite = (ip: string) => {
    setFavorites((current) =>
      current.includes(ip)
        ? current.filter((favorite) => favorite !== ip)
        : [...current, ip],
    )
  }

  const isFavorite = (ip: string) => favorites.includes(ip)

  useEffect(() => {
    void loadLocations()
  }, [loadLocations])

  // Filtramos con 400 ms de retardo para no actualizar en cada tecla.
  useEffect(() => {
    const timeout = setTimeout(() => {
      const text = search.toLowerCase()
      setFilteredLocations(
        locations.filter((location) =>
          `${location.query} ${location.country} ${location.city}`
            .toLowerCase()
            .includes(text),
        ),
      )
    }, 400)

    // Cancelamos el retardo anterior si el usuario vuelve a escribir.
    return () => clearTimeout(timeout)
  }, [search, locations])

  return (
    <main className="App">
      <h1>Geolocalización</h1>
      <p>Favoritos: {favorites.length}</p>

      {/* Detalle: aparece al seleccionar una ubicación de la lista. */}
      {selectedLocation ? (
        <LocationDetail
          location={selectedLocation}
          favorite={isFavorite(selectedLocation.query)}
          onBack={() => setSelectedLocation(null)}
          onToggleFavorite={() => toggleFavorite(selectedLocation.query)}
        />
      ) : (
        <>
          <SearchBar value={search} onChange={setSearch} />
          <StatusMessage status={requestStatus} onRetry={loadLocations} />
          {requestStatus === 'success' && filteredLocations.length > 0 && (
            <LocationList
              locations={filteredLocations}
              isFavorite={isFavorite}
              onSelect={setSelectedLocation}
              onToggleFavorite={toggleFavorite}
            />
          )}
          {requestStatus === 'success' && filteredLocations.length === 0 && (
            <p>No hay resultados para ese filtro.</p>
          )}
        </>
      )}
    </main>
  )
}

export default App

