import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class ProductList extends React.Component {
    render() {
        return (
            <div className="col-12">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active">
                        전체
                    </a>
                    <a href="#123" className="list-group-item list-group-item-action">아우터</a>
                    <a href="#" className="list-group-item list-group-item-action">상의</a>
                    <a href="#" className="list-group-item list-group-item-action">바지</a>
                    <a href="#" className="list-group-item list-group-item-action">원피스</a>
                </div>
            </div>
        );
    }
}
export default ProductList