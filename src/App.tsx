
import './App.css'
import { useCallback, useEffect, useState } from 'react'

// Datos que recibimos de la API de geolocalización.
type Location = {
  status: 'success' | 'fail'
  message?: string
  query: string
  country: string
  city: string
  regionName: string
  timezone: string
}

// Estados posibles de la consulta: cargando, error, sin datos o correcta.
type RequestStatus = 'loading' | 'error' | 'empty' | 'success'

const IPS = ['8.8.8.8', '1.1.1.1', '208.67.222.222', '9.9.9.9', '4.2.2.2']

// Consulta las cinco IPs y devuelve sus respuestas.
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
        <section>
          <button onClick={() => setSelectedLocation(null)}>Volver</button>
          <h2>{selectedLocation.country}</h2>

          {/* Favoritos: permite marcar o desmarcar la ubicación seleccionada. */}
          <button onClick={() => toggleFavorite(selectedLocation.query)}>
            {isFavorite(selectedLocation.query)
              ? 'Quitar de favoritos'
              : 'Añadir a favoritos'}
          </button>
          <p>IP: {selectedLocation.query}</p>
          <p>Ciudad: {selectedLocation.city}</p>
          <p>Región: {selectedLocation.regionName}</p>
          <p>Zona horaria: {selectedLocation.timezone}</p>
        </section>
      ) : (
        <>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Filtrar resultados..."
            aria-label="Filtrar resultados"
          />
          {/* Verificación visual del estado actual de la consulta. */}
          {requestStatus === 'loading' && <p>Cargando...</p>}
          {requestStatus === 'error' && (
            <>
              <p>Ocurrió un error al cargar los datos.</p>
              {/* Reintenta la misma petición sin recargar la página. */}
              <button onClick={loadLocations}>Reintentar</button>
            </>
          )}
          {requestStatus === 'empty' && <p>No hay resultados.</p>}
          {requestStatus === 'success' && (
            filteredLocations.length ? (
              <ul>
                {filteredLocations.map((location) => (
                  <li
                    key={location.query}
                    // Al pulsar la fila se abre el detalle de la ubicación.
                    onClick={() => setSelectedLocation(location)}
                  >
                    {location.query} - {location.country} - {location.city}

                    {/* Botón independiente para marcar sin abrir el detalle. */}
                    <button
                      onClick={(event) => {
                        event.stopPropagation()
                        toggleFavorite(location.query)
                      }}
                    >
                      {isFavorite(location.query) ? '★' : '☆'}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay resultados para ese filtro.</p>
            )
          )}
        </>
      )}
    </main>
  )
}

export default App
