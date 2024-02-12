import useSwr from 'swr'

const baseUrl = 'https://pokeapi.co/api/v2'

export const useRequest = (path, name ) => {
    if (!path) {
        throw new Error('Path is required')
    }

    const url = name ? baseUrl + path + '/' + name + `?limit=20&offset=20` : baseUrl + path
    //We use the useSWR hook to fetch the data based on the key that is provided as well as the fetcher function
    //The key with useSWR is the url that you want to fetch from. useSWR does use caching as well. The url will be the key in useSWR's cache
    const { data, error } = useSwr(url)

    return { data, error }
}