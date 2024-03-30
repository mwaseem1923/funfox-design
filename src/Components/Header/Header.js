import React from 'react'
import logo from '../../Images/logo.png';

export default function Header() {
  return (
    <header className="App-header">
        <img src={logo} className="logo" width={"100px"} height={"auto"} />
        {/* <img src='favicon.ico' className='' /> */}
      </header>
  )
}
