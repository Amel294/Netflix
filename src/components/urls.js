import { API_KEY,apiBaseUrl } from "../constants/constants"

export const originals = `${ apiBaseUrl }/discover/tv?api_key=${ API_KEY }&with_networks=213`
export const action = `${ apiBaseUrl }/discover/movie?api_key=${ API_KEY }&with_genres=28`

export const getUrl = (id) => `${ apiBaseUrl }/movie/${id}/videos?api_key=${ API_KEY }&language=eu-US`