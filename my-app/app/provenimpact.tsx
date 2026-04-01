import React from 'react'
import Box1 from './box1'
import Box2 from './box2'
import Box3 from './box3'       

const provenimpact = () => {
  return (
    <div>
        <div className='h-[711px] w-[1600px] flex justify-between items-center'>
        <Box1 />
        <div className='h-[711px] w-[1px] bg-gray-300'></div>
        <Box2 />
        <div className='h-[711px] w-[1px] bg-gray-300'></div>
        <Box3 />
        </div>
    </div>
  )
}

export default provenimpact