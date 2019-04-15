import React from 'react';

import './css/Tabs.scss'

function Tabs() {
  return (
    <div className="Tabs">
      <div className="nav">
        <a value="1" href="/#" >Users</a>
        <a value="2" href="/#">Sign-in method</a>
        <a value="3" href="/#">Templates</a>
        <a value="4" href="/#">Usage</a>
      </div>
    </div>
  )
}

export default Tabs;