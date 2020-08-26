import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Digital, Design, Development } from './list';
export default class ServicesList extends Component {
    render() {
        return (
            <>
            <div className="services_main">
                <img src={require('../../img/digital_icon.png')} alt=""/>
                <h1>Digital</h1>
                <ul>
                    {Digital.map(function(item) {
                    return <li key={item.link}><Link to={item.link}>{item.display}</Link></li>;
                    })}
                </ul>
            </div>
            <div className="services_main" style={{background:"#221d1b"}}>
                <img src={require('../../img/design_icon.png')} alt=""/>
                <h1>Design</h1>
                <ul>
                    {Design.map(function(item) {
                    return <li key={item.link}><Link to={item.link}>{item.display}</Link></li>;
                    })}
                </ul>
            </div>
            <div className="services_main">
                <img src={require('../../img/development_icon.png')} alt=""/>
                <h1>Development</h1>
                <ul>
                    {Development.map(function(item) {
                    return <li key={item.link}><Link to={item.link}>{item.display}</Link></li>;
                    })}
                </ul>
            </div>
            </>
        )
    }
}
