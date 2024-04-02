import React from 'react'

const Header = () => {
  return (
    <header className='d-flex align-items-center justify-content-center gap-2 flex-column'>
        <h1 className='text-center text-danger'>Octapus Hospital</h1>
        <button className='text-center btn btn-danger'>Our Doctors</button>
    </header>
  )
}

export default Header;