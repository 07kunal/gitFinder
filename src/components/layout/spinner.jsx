import React from 'react';
import Spinner from './assets/spinner.gif'

function spinner() {
  return (
    <div className='w-100 mt-20'>
        <img width={180}  src={Spinner}  alt="Loading..." className="text-center m-auto" />

    </div>
  )
}

export default spinner