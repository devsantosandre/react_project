import React from 'react';

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container-fluid'>
            <div className="navbar-header">
                <a href="#" className="navbar-brand">
                    <i className='fa fa-calendar-check-o'></i>Meu App
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><a href="#/todos">Tarefa</a></li>
                    <li><a href="#/about">Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)