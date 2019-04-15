import React from 'react';
import ButtonAppBar from './ButtonAppBar'
import Tabs from './Tabs'
import HeaderTitle from './HeaderTitle';
import './css/Header.scss'

const Header = () => {


    return(
        <div className="Header">
            <ButtonAppBar />
            <HeaderTitle />
            <Tabs />
        </div>
    )
}
export default Header