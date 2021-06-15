import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data';


function ProductScreen(props) {
    console.log(props.match.params.id)
    const product = data.products.find(i => i._id === props.match.params.id);
    return(

        <div className="container" >
            <div className="home-page">
                <Link to="/">Ana Sayfa</Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product"></img>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Yıldız ({product.numReviews} Yorum)
                        </li>
                        <li>
                            <h3>{product.price} ₺</h3>
                        </li>
                        <li> Ürün Bilgisi:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Fiyat: {product.price} ₺
                        </li>
                        <li>
                            Durum: {product.status}
                        </li>
                        <li>
                            Adet: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            </select>
                        </li>
                        <li>
                            <button className="button">Sepete Ekle</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ) 
}

export default ProductScreen;