import React from 'react'

const UserItem = () => {
  return (
    <div className='flex items-center gap-3 mb-8'>
        <div className='bg-green-600 min-w-9 min-h-9 rounded-full flex justify-center items-center font-semibold text-white p-1'>
            <h1>AM</h1>
        </div>
        <div>
            <h1 className='font-bold text-[13px]'>Abdulqadir Mohamed</h1>
            <p className='text-[12px]'>cajiibxaaji02@gmail.com</p>
        </div>
    </div>
  )
}

export default UserItem