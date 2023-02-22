// jb component load hoga (consists the user-info) then we bring that in the useEffect hook .
import {  useContext } from 'react'
import Spinner from '../layout/spinner'
import Useritem from './Useritem'
import GithubContext from '../../context/github/GithubContext'


import React from 'react'

function UserResults() {

    // importing from the context 

    const { users, loading } = useContext(GithubContext)

    // useEffect(() => {
    //     fetchUsers() 
    // }, [])


    if (!loading) {
        return (
            // map the entire fetch data into new array and displaying that data into grid format with responsiveness
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-w-7xl m-auto'>
                {/* UserResults */}
                {users.map((user) => (
                    // <h3>{user.login }</h3>
                    <Useritem key={user.id} user={user} />
                ))}
            </div>
        )

    } else {
        return (
            <Spinner />
        )
    }

}

export default UserResults