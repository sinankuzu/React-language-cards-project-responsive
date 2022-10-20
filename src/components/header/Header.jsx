import React from 'react'
import pic from "../../assets/react.svg"
import "./Header.css"

const Header = () => {
  return (
    <div>
      <img
        src={pic}
        alt=""
        className='logo'
      />
    </div>
  );
}

export default Header