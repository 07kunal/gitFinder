import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

// variable to create this 
const GithubContext = createContext();

// setting up the url/context


// MAKING A export provider function
export const GithubProvider = ({ children }) => {

    //make an object as 
    const initialState = {
        //for different user
        users: [],
        // for specific user
        user: {},
        // user repos
        repos:[],
        // loading:true,
        loading: false,

    }

    //creating the reducer 
    const [state, dispatch] = useReducer(githubReducer, initialState)

    
   



    return <GithubContext.Provider value={{
    ...state,
    dispatch,
        // searchUsers,
        // getUser,
        // getUserRepos,
        // clearUsers,


    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext 