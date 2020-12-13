import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form, Container } from 'react-bootstrap';
import  { cookie } from 'react-cookie'

const API = 'http://localhost:3000/api/users';

class SignUpExtra extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            gender: ""
        };
    }


    clickAddressInputBar = (e) => {
        var controller = this

        daum.postcode.load(function(){
            new daum.Postcode({
                oncomplete: function(data) {
                    controller.setState({
                        address: data.jibunAddress
                    })
                }
            }).open();
        })
    }

    clickGenderRadioButton = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    onSubmitExtraRegister = (e) =>{
        const { gender } = this.state
        e.preventDefault()
        console.log(gender)
        console.log(e.target[0].value) // 주소
        console.log(e.target[3].value) // 휴대폰 번호
        this.loadDateForRegister(gender, e.target[0].value, e.target[3].value)
    }

    loadDateForRegister = (gender, address, phone) => {
        fetch("http://localhost:3000/api/users_description", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(
                {
                    gender: gender,
                    address: address,
                    phone: phone
                })
        })
            .then(response => {
                console.log(response)
                console.log(response.status)
                if(response.status === 200) {
                    // 회원 추가 정보 입력 성공시
                    // cookie.setItem()
                    window.location.href = "http://localhost:3000"
                } else {
                    //회원가입 실패시
                    alert("회원가입에 실패하였습니다")
                }
            }).catch(function(error) {
            console.log("Request failed", error);
        });
    }

    render() {
        const { address } = this.state

        return (
            <div className="container">
                <div className="row mt-5">
                    <h1>추가 정보 입력</h1>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <form onSubmit={this.onSubmitExtraRegister}>
                            <div className="form-group">
                                <label htmlFor="username">주소</label>
                                <input type="text" className="form-control" id="email" placeholder="이메일 주소를 입력해주세요" name="email" value={address} onClick={this.clickAddressInputBar} required/>
                            </div>

                            <hr></hr>
                            <div className="form-group" onChange={this.clickGenderRadioButton}>
                                <label htmlFor="name">성별</label>
                                <br></br>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="GenderRadioOptions"
                                           id="boy" value="boy"/>
                                        <label className="form-check-label" htmlFor="boy">남</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="GenderRadioOptions"
                                           id="girl" value="girl"/>
                                        <label className="form-check-label" htmlFor="girl">여</label>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label htmlFor="phone">휴대폰 번호</label>
                                <input type="text" className="form-control" id="phone" placeholder="( '-' 를 빼고 입력해주세요. )" name="phone" onChange={this.userNameChange} required/>
                            </div>
                            <hr></hr>
                            <button type="submit" className="btn btn-primary">완료</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUpExtra