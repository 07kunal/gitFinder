import React from 'react'

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is developed by 
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
   
        
        </a>
        <strong>
          <a href='https://traversymedia.com'> Kunal</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-black'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-black' href='https://twitter.com/hassibmoddasser'>
         {' '} Hassib Moddasser
        </a>
      </p>
    </div>
  )
}

export default About