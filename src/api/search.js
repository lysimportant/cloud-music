import { ajax } from '../lib/ajax'

export const reqSearch = params => {
  return ajax({
    url: '/search',
    params
  })
}
