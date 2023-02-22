import React from 'react';
import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubAction';





function UserSearch() {

    const [text, setText] = useState('')
    const { users  ,dispatch } = useContext(GithubContext)
// alert
const { setAlert} = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (text === "") {
            setAlert("please enter something" , "error" )
        } else {
            dispatch({type:'SET_LOADING'})
            // @todo- search users
          const users = await  searchUsers(text)
          dispatch({type:'GET_USERS' , payload:users})
            setText('')
        }

    }
    // clearing the user/set into the empty array

   

    return (
        <div className='grid grid-cols-1 xl:grid-cols2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        {/* input */}
                        <div className="relative">
                            <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder='Search'
                                value={text}
                                onChange={handleChange}

                            />
                            {/* search button */}
                            <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>
                        </div>
                    </div>
                </form>
            </div>
            {/* clear button  only show when the user list exits*/}
            {users.length > 0 && (<div>
                <button className="btn  btn-lg" onClick={()=> dispatch({type:'CLEAR_USERS'})}>
                    Clear
                </button>
            </div>)}

        </div>
    )
}

export default UserSearch