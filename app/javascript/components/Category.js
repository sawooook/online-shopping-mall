import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ProductList from "./ProductList";

class Category extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-3">
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
                <div className="col-9">
                    <ProductList></ProductList>
                </div>
            </div>
        );
    }
}
export default Category