import React from 'react';

export default props => (
    <nav className='navbar navbar-inverse bg-inverse' style={{ backgroundColor: "black" }}>

        <div className="navbar-header">
            <a href="#" className="navbar-brand">
                <i className="fa fa-lastfm-square" style={{ paddingRight: "0.6em", color: "red" }}></i>last.fm
                </a>
        </div>

        <div id='navbar' className='navbar-collapse collapse'>
            <ul className="nav navbar-nav">
                <li><a href="#/todos">Música</a></li>
                <li><a href="#/about">Leia-me</a></li>
            </ul>
        </div>

    </nav>
)