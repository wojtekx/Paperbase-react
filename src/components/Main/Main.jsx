import React from 'react';
import './css/Main.scss';
import icon from '../../assets/Layer 9.png';
import icon2 from '../../assets/Layer 8.png';

const Main = () => {


    return(
        <div className="Main">
            <div className="modal">
                <section className="form">
                    <div className="input">
                        <img src={icon} alt="lupa" /><input type="text" placeholder=" Search by email or user ID"/>
                    </div>
                    <div className="btn">
                        <button>Add user</button>
                        <img src={icon2} alt="odswiez"/>
                    </div>
                </section>
                <section className="field">
                    <p>No users for this project yet</p>
                </section>
            </div>
        </div>
    )
}
export  {Main}