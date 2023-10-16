import axios from 'axios'
import { AVAILABLE_HOMES_URL } from '../constants'

export const getAvailableHomes = async (destination) => {
  const { data: availableHomes } = await axios.get(AVAILABLE_HOMES_URL.href, {
    params: {
      search: destination,
    },
  })

  return availableHomes
}
