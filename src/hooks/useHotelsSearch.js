import { getAvailableHomes } from '../services/availableHomes'

export const useHotelsSearch = () => {
  const searchHotels = (query) => getAvailableHomes(query)
  return { searchHotels }
}
