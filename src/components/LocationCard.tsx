import type { Location } from '../types/api'

type LocationCardProps = {
  location: Location
  favorite: boolean
  onSelect: () => void
  onToggleFavorite: () => void
}

function LocationCard({
  location,
  favorite,
  onSelect,
  onToggleFavorite,
}: LocationCardProps) {
  return (
    <li onClick={onSelect}>
      {location.query} - {location.country} - {location.city}
      <button
        onClick={(event) => {
          event.stopPropagation()
          onToggleFavorite()
        }}
      >
        {favorite ? '★' : '☆'}
      </button>
    </li>
  )
}

export default LocationCard