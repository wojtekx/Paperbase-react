import React from 'react';
import question from '../../assets/question.svg'
import './css/HeaderTitle.scss'



function HeaderTitle() {
  return (
    <div className="HeaderTitle">
        <h1>Authentication</h1>
        <div className="btnGroup">
            <button>Web setup</button>
            <img src={question} alt="?"/>
        </div>
    </div>
  )
}

export default HeaderTitle;