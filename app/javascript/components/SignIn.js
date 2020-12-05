import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form, Container } from 'react-bootstrap';


const API = 'http://localhost:3000/api/users/login';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    loginCheck = (e) => {
        e.preventDefault()
        this.loadLoginData(e)
    }

    loadLoginData = (e) => {
        console.log("123123123")
        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(
                {
                    email: e.target[0].value,
                    password: e.target[1].value
                })
        })
            .then(response => {
                console.log(response)
                console.log(response.status)
                if(response.status === 200) {
                    // 로그인 성공시
                    window.location.href = "http://localhost:3000/web/mains"
                }else{
                    //로그인 실패시
                    alert("로그인에 실패하였습니다")
                }
            }).catch(function(error) {
            console.log("Request failed", error);
        });
        // .then(data => this.setState({
        //     price_krw: "123",
        //     percent_change_1h: "456"
        // }));
    }

    render() {
        const { email, password } = this.state

        return (
            <div className="container">
                <div className="col-12 text-center">
                    <h3 className="mb-3 mt-5">Login</h3>
                    <form onSubmit={this.loginCheck}>
                        <div className="form-group col-4 mx-auto">
                            <input type="text" className="form-control" placeholder="이메일 주소를 입력해주세요"/>
                        </div>
                        <div className="form-group col-4 mx-auto">
                            <input type="password" className="form-control" placeholder="비밀번호를 입력해주세요"/>
                        </div>
                        <div className="form-group col-4 mx-auto">
                            <input type="submit" className="btn-primary btn" value="Login"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default SignUp