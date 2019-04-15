import React from 'react';
import './css/ButtonAppBar.scss'
import logo from '../../assets/paczkomaty.jpg'
import bell from '../../assets/bell.svg'
import hamb from '../../assets/bars-solid.svg'

function ButtonAppBar() {
  const toggle = (e) =>{
      document.querySelector('.left').classList.toggle('hide');
  }
  return (
    <div className="buttonBar">
    <button onClick={toggle} className="hamburger"><img src={hamb} alt="hamburger"/></button>
      <button>Go to docs</button>
      <img className="bell" src={bell} alt="bell"/>
      <div className="image"> 
        <img src={logo} alt="logoUser"/>
      </div>
    </div>
  )
}

export default ButtonAppBar;