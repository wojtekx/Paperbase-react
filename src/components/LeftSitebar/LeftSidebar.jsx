import React from 'react';
import './css/LeftSidebar.scss'
import icon1 from '../../assets/Layer 1.png'
import icon2 from '../../assets/Layer 2.png'
import icon3 from '../../assets/Layer 3.png'
import icon4 from '../../assets/Layer 4.png'
import icon5 from '../../assets/Layer 5.png'
import icon6 from '../../assets/Layer 6.png'
import icon7 from '../../assets/Layer 7.png'
import icon8 from '../../assets/Layer 10.png'
import icon9 from '../../assets/Layer 11.png'
import icon10 from '../../assets/Layer 12.png'

const LeftSidebar = () => {


    return(
        <div className="LeftSidebar">
            <section className="active">
                <h2>Paperbase</h2>
            </section>
            <section className="active">
                <img src={icon10} alt="home"/><h5>Project Overview</h5>
            </section>
            <section>
                <h3>Develop</h3>
                <article className="selected"><img src={icon9} alt="icon"/><h5>Authentication</h5></article>
                <article><img src={icon8} alt="icon"/><h5>Database</h5></article>
                <article><img src={icon7} alt="icon"/><h5>Storage</h5></article>
                <article><img src={icon6} alt="icon"/><h5>Hosting</h5></article>
                <article><img src={icon5} alt="icon"/><h5>Functions</h5></article>
                <article><img src={icon4} alt="icon"/><h5>ML Kit</h5></article>
            </section>
            <section>
                <h3>Quality</h3>
                <article><img src={icon3} alt="icon"/><h5>Analytics</h5></article>
                <article><img src={icon2} alt="icon"/><h5>Performance</h5></article>
                <article><img src={icon1} alt="icon"/><h5>Test Lab</h5></article>
            </section>
        </div>
    )
}
export  {LeftSidebar}