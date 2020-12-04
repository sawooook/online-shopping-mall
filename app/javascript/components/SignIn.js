import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form, Container } from 'react-bootstrap';


const API = 'http://localhost:3000/api/users';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    }

    componentWillMount() {
        this.loadData();
    }

    loadData() {
        fetch(API)
            .then(response => response.json())
            .then(res => {
                this.setState({user: res})
            })
        // .then(data => this.setState({
        //     price_krw: "123",
        //     percent_change_1h: "456"
        // }));
    }

    render() {
        const test = this.state.user.map((post)=>
            <div className="state">
                <h4>{post.created_at}</h4>
                <h4>{post.email}</h4>

            </div>
        )

        return (
            <Form className="text-center">
                <Form.Group controlId="formBasicEmail" className="mt-5 text-center">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className="col-4 mx-auto"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="text-center">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="Password" className="col-4 mx-auto"/>
                </Form.Group>
                <Button variant="primary" type="submit" className="col-4 mt-5 text-white">
                    로그인하기
                </Button>
                <p></p>
                <Button variant="secondary" type="submit" className="col-4 mt-2">
                    <a href="/web/users/new" className="text-white">
                        회원가입하기
                    </a>
                </Button>
            </Form>
        );
    }
}
export default SignUp