import React from 'react';

import { Link } from 'react-router-dom';

const Header = (props) => {
    const { cardType, showIcons } = props;

    const isShowIcons = () => {
        if (showIcons) {
            return (
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/about">About</Link></li>
                    <li><a onClick={props.changeView}><i className="material-icons">{cardType ? "view_list" : "view_module"}</i></a></li>
                    <li><a onClick={props.fetchNewUsers}><i className="material-icons">refresh</i></a></li>
                </ul>
            )
        }
    }

    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="" className="brand-logo center">Bit Persons</a>
                {isShowIcons()}
            </div>
        </nav>
    )
}

export default Header;