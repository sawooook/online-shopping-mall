import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form, Container } from 'react-bootstrap';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">SaWook Shop</a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#12312312">홈</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">랭킹</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/web/products">카테고리</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavBar