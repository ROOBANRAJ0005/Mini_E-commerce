import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import {toast} from 'react-toastify'
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const ProductDetails = ({cartItems,setCartItems}) => {

    const [product,setProduct] = useState("");
    const {id} = useParams();
    const [qty,setQty] = useState(1);

    
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/product/'+id)
        .then(res => res.json())
        .then( res => setProduct(res.product))
    },[])

    console.log('ProductDetails'+product);

    function addCart(){
        const itemExist = cartItems.find((item)=>item.product._id == product._id);
        if(!itemExist){
        const newCart = {product,qty};
        setCartItems((items)=>[...items,newCart]);
        toast.success("Cart Item added succesfully!")
    }
    }

    function increaseQty(){
        if(product.stock == qty){
            return
        }
        setQty((e)=>e+1);
    }

    function decreaseQty(){
        if(qty>1){
            setQty((e)=>e-1);
        }
    }

  return (
    <div className="container container-fluid">
                <div className="row f-flex justify-content-around">
                    <div className="col-12 col-lg-5 img-fluid" id="product_image">
                        <img src="images/logo.png" alt="sdf" height="500" width="500" />
                    </div>

                    <div className="col-12 col-lg-5 mt-5">
                        <h3>{product.name}</h3>
                        <p id="product_id">Product #{product._id}</p>

                        <hr />

                        <div className="rating-outer">
                            <div className="rating-inner" style={{width : `${product.ratings/5 * 100}%`}}></div>
                        </div>
                

                        <hr />

                        <p id="product_price">${product.price}</p>
                        <div className="stockCounter d-inline">
                            <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                            <input type="number" className="form-control count d-inline" value={qty} readOnly />

                            <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                        </div>
                        <button type="button"  disabled={product.stock == 0}   id="cart_btn" className="btn btn-primary d-inline ml-4" onClick={addCart}>Add to Cart</button>

                        <hr />

                        <p>Status: <span id="stock_status" className={product.stock > 0 ?'text-success':'text-danger'}>{product.stock > 0  ?'In Stock' : 'Out of Stock'}</span></p>

                        <hr />

                        <h4 className="mt-2">Description:</h4>
                        <p>{product.description}</p>
                        <hr />
                        <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>
                        
                        <div className="rating w-50"></div>
                                
                    </div>

                </div>
            </div>
  )
}
