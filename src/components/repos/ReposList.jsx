import React from 'react'
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function ReposList({reposdata}) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
<div className="card-body">
    <h2 className="text-3xl my-4 font-bold card-title">
        Latest Repositories
    </h2>
    {reposdata.map((repo)=>(
        // <h3>{repo.name}</h3>
        <RepoItem key={repo.id} reposource={repo} />
    ))}

</div>
    </div>
  )
}
ReposList.propType = {
    repos:PropTypes.array.isRequired,
}

export default ReposList