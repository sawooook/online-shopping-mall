import React from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.css'


const API = '';

class CoinPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price_krw: [],
            percent_change_1h: []
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.loadData(), 3000 * 10);
        this.loadData();
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    loadData() {
        fetch(API + "?coin_name=" + this.props.coin_name)
            .then(response => response.json())
            .then(data => this.setState({
                price_krw: parseInt(data.coin.price_krw, 10),
                percent_change_1h: data.coin.percent_change_1h
            }));
    }

    render() {
        let html = "";
        html = <div className="display_inline">
            <button className="btn btn-primary">hello </button>
            <div className="float_left"><b>{this.props.coin_name}</b></div>
            <div className="top_header_right_border"></div>
            <div className="float_right" style={{color: this.state.percent_change_1h > 0 ? "red" : "blue"}}>{this.state.price_krw}원 ({this.state.percent_change_1h}%)</div>
        </div>
        return html;
    }
}
export default CoinPrice