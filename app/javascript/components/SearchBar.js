import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form, Container } from 'react-bootstrap';

class SearchBar extends React.Component {
    userLogout=()=> {
        localStorage.removeItem("token")
        window.location.href = "/web/mains"
        alert("로그아웃 되었습니다.")
    }

    tokenCheck(param) {
        console.log(param)
        if(param === "login"){
            return(
                <a href="/web/users/login"><h6 className="ml-2"> 로그인 </h6></a>
            )
        }else{
            return(
                <h6 className="ml-2 text-primary" onClick={this.userLogout} > 로그아웃 </h6>
            )
        }
    }

    render() {
        return (
            <div className="d-flex flex-row">
                <div className="input-group mb-5 w-50 my-auto">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">검색</span>
                    </div>
                    <input type="text" className="form-control" placeholder="제품 검색" aria-label="Username"
                           aria-describedby="basic-addon1"/>
                </div>
                <div className="d-flex flex-row ml-auto my-auto">
                    { localStorage.getItem("token") ? this.tokenCheck("logout") : this.tokenCheck("login") }
                    <a href="/web/users/new"><h6 className="ml-2"> 회원가입 </h6></a>
                    <h6 className="ml-2"> 장바구니 </h6>
                    <h6 className="ml-2"> 마이페이지 </h6>
                </div>
            </div>
        );
    }
}
export default SearchBar