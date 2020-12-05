import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form, Container } from 'react-bootstrap';
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import CarouselPage from "./CarouselPage";

const API = 'http://localhost:3000/api/users';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    }

    render() {
        const test = this.state.user.map((post)=>
            <div className="state">
                <h4>{post.created_at}</h4>
                <h4>{post.email}</h4>

            </div>
        )

        return (
            <div>
                <NavBar></NavBar>
                <SearchBar></SearchBar>
                <CarouselPage></CarouselPage>
            </div>
        );
    }
}
export default Main