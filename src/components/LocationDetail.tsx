import type { Location } from '../types/api'

type LocationDetailProps = {
  location: Location
  favorite: boolean
  onBack: () => void
  onToggleFavorite: () => void
}

function LocationDetail({
  location,
  favorite,
  onBack,
  onToggleFavorite,
}: LocationDetailProps) {
  return (
    <section>
      <button onClick={onBack}>Volver</button>
      <h2>{location.country}</h2>
      <button onClick={onToggleFavorite}>
        {favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      </button>
      <p>IP: {location.query}</p>
      <p>Ciudad: {location.city}</p>
      <p>Región: {location.regionName}</p>
      <p>Zona horaria: {location.timezone}</p>
    </section>
  )
}

export default LocationDetail