import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
// import { Product } from "./Product/Product";
import { useFetch } from '../../Utils/useFetch';

export const Products = () => {
    // const [products, setProducts] = useState([]);
    // const [filter, setFilter] = useState([]);
    // const [loading, setLoading] = useState(false);
    // let componentMount = true;

    // const fetchData = async () => {
    //     setLoading(true);
    //     const response = await fetch(url);
    //     setProducts(await response.clone().json());
    //     setFilter(await response.json());
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    //     // return () => {
    //     //     componentMount = false;
    //     // }
    // }, []);

    const [filter, setFilter] = useState([]);
    const url = "https://fakestoreapi.com/products";

    const {loading, data} = useFetch(url);
    const products = data;

    useEffect(() => {
        setFilter(data);
    }, [data]);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    }

    const filterProducts = (cat) => {
        const updatedProducts = products.filter(product => product.category === cat);
        setFilter(updatedProducts);
    }
    
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-2">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(products)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("jewelery")}>Jewellery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("electronics")}>Electronics</button>
                </div>

                {filter.map((product) => {
                    return (
                        <React.Fragment key={product.id}>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4">
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bold">${product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </>
        );
    }

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}