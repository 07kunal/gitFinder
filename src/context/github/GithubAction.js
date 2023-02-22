import axios from "axios"
// setting up the url/context

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


// created the instance for the axios .. 
const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` }
})

// Get the search result from the end-point of api 
export const searchUsers = async (text) => {


    // params as an object to search for the specific search item
    const params = new URLSearchParams({
        q: text
    })

    //in axios we don't need to convert fetch data into json typ
    const response = await github.get(`/search/users?${params}`)
    return response.data.items



}
// Get user and repos
export const getUserAndRepos = async (login) => {
    //making two request we can use the promise.all (cause we need all getUser and getUserRepos)
    const [user, repos] = await Promise.all([
        // array of request can be here
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])
    return { user:user.data , repos: repos.data }
}