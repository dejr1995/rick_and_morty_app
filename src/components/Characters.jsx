import React from 'react'

const Characters = ({characters = []}) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {
        characters.map((item, index) => (
          <div key={index} className='flex  items-center justify-center border'>
            <div className='m-1'>
              <img className='' src={item.image} alt="" />
              <div className='mt-4'>
                <h5 className='pb-2 font-semibold'>{item.name}</h5>
                <hr />
                <p>Location: {item.location.name}</p>
                <p>Gender: {item.gender}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Characters