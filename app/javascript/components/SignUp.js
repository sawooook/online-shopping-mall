import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form, Container } from 'react-bootstrap';


const API = 'http://localhost:3000/api/users';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            nickNameResultText: "",
            emailResultText: "",
            username: "",
            firstPassword: "",
            checkPassword: "",
            passwordResultText: ""
        };
    }

    emailAndUserNameChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.loadData(e.target)
    }

    loadData = (target) => {
        console.log(target)
        fetch("http://localhost:3000/api/users/sign_up_check", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(
                {
                    [target.name]: target.value
                })
        })
            .then(response => {
                console.log(response)
                console.log(response.status)
                if(response.status === 200) {
                    this.setState({
                        emailResultText: "사용 가능한 이메일 주소입니다."
                    })
                }else if (response.status === 409){
                    this.setState({
                        emailResultText: "사용 불가능한 이메일 주소 입니다."
                    })
                }else if (response.status === 202){
                    this.setState({
                        nickNameResultText: "사용 가능한 닉네임 입니다."
                    })
                }else if (response.status === 406){
                    this.setState({
                        nickNameResultText: "사용 불가능한 닉네임 입니다."
                    })
                }
            }).catch(function(error) {
            console.log("Request failed", error);
        });
    }

    firstPasswordChange = (e) =>{
        this.setState({
            firstPassword: e.target.value
        })
    }

    checkPasswordChange= (e) =>{
        this.setState({
            checkPassword: e.target.value
        })
        this.doesPasswordMatch()
    }

    doesPasswordMatch = (e) => {
        const { firstPassword, checkPassword} = this.state

        if(firstPassword === checkPassword) {
            this.setState({
                passwordResultText: "패스워드가 일치 합니다",
            })
        }else{
            this.setState({
                passwordResultText: "패스워드가 불일치 합니다",
            })
        }
    }


    render() {
        const { nickNameResultText, emailResultText, passwordResultText } = this.state

        return (
            <div className="container">
                <div className="row mt-5">
                    <h1>회원가입</h1>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <form method="POST" action=".">
                            <div className="form-group">
                                <label htmlFor="username">이메일 주소</label>
                                <input type="text" className="form-control" id="email" placeholder="이메일 주소를 입력해주세요" name="email" onChange={this.emailAndUserNameChange}/>
                                <small className="text-black mt-3">{emailResultText}</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">닉네임</label>
                                <input type="text" className="form-control" id="username" placeholder="닉네임을 입력해주세요" onChange={this.emailAndUserNameChange} name="username"/>
                                <small className="text-black mt-3">{nickNameResultText}</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">비밀번호</label>
                                <input type="password" className="form-control" id="firstPassword" placeholder="비밀번호를 입력해주세요"
                                       name="firstPassword" onChange={this.firstPasswordChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">비밀번호 확인</label>
                                <input type="password" className="form-control" id="checkPassword" placeholder="비밀번호를 한번더 입력해주세요"
                                       name="checkPassword" onChange={this.checkPasswordChange}/>
                                <small className="text-black mt-3">{passwordResultText}</small>
                            </div>
                            <button type="submit" className="btn btn-primary">등록</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUp