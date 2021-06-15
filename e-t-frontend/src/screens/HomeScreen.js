import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function HomeScreen(props) {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/products");
            setProduct(data);
        }
         fetchData();
        return () => {
            
        }
    }, [])

    return(
        <div>
             <ul className = "products">
                  {
                  products.map(product => 
                                      <li key={product._id}>
                                      <div className = "product">
                                      <Link   to ={`/products/${product._id}`} >
                                        <img className = "product-image" src = {product.image} alt = "" />
                                      </Link>

                                      <div className = "product-brand">{product.brand}</div>
                                      <div className = "product-name">
                                      <Link   to ={`/products/${product._id}`} >{product.name}</Link>
                                      </div>
                                          <div className = "product-rating">{product.rating} Yıldız ({product.numReviews})</div>
                                          <div className = "product-price">{product.price}</div>
                                      </div>
                                  </li>
                    )}
                </ul>
        </div>
    )
}

export default HomeScreen;