import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form, Container } from 'react-bootstrap';
import NavBar from "./NavBar";
import Category from "./Category";
import ProductList from "./ProductList";

const API = 'http://localhost:3000/api/users';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            nickNameResultText: "",
            emailResultText: "",
            username: "",
            name: "",
            firstPassword: "",
            checkPassword: "",
            passwordResultText: ""
        };
    }

    render() {
        const { nickNameResultText, emailResultText, passwordResultText } = this.state

        return (
            <div>
                <NavBar></NavBar>
                <Category></Category>
            </div>
        );
    }
}
export default ProductIndex