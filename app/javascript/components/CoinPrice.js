import React from "react"
import 'bootstrap/dist/css/bootstrap.css'


const API = 'http://localhost:3000/api/users';

class CoinPrice extends React.Component {
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
            <div>{test}</div>
        );
    }
}
export default CoinPrice