import type { Location } from '../types/api'
import LocationCard from './LocationCard'

type LocationListProps = {
  locations: Location[]
  isFavorite: (ip: string) => boolean
  onSelect: (location: Location) => void
  onToggleFavorite: (ip: string) => void
}

function LocationList({
  locations,
  isFavorite,
  onSelect,
  onToggleFavorite,
}: LocationListProps) {
  return (
    <ul>
      {locations.map((location) => (
        <LocationCard
          key={location.query}
          location={location}
          favorite={isFavorite(location.query)}
          onSelect={() => onSelect(location)}
          onToggleFavorite={() => onToggleFavorite(location.query)}
        />
      ))}
    </ul>
  )
}

export default LocationList