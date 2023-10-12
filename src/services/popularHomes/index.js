import axios from 'axios'

import { POPULAR_HOMES_URL } from '../constants'

export const getPopularHomes = async () => {
  const { data: homes } = await axios.get(POPULAR_HOMES_URL.href)
  return homes
}
