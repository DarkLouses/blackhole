import React from 'react'
import './header.css'
import Planetas from './Planetas'


const Header = () => {

  return (

    <header>
      <Planetas />
      <div className="container header__container">
     
        <h1>Walk Mong</h1>

    
      </div>
    </header>

  )

}

export default Header