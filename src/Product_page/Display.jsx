import React from 'react'

const Display = ({products}) => {
  return (
    <div className='col-9 p-3'>
 
        <div className='row'>
            {
                products.map(
                    (prod) => {
                         return <Product key={prod.id} image={prod.image} title={prod.title} price={prod.price}/>  
                    }
                )
            }
        </div>

    </div>
  )
}

export default Display


const Product = (prod) => {
    return(
        <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div className="product"> <img src={prod.image} alt=""/>
                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                    <li className="icon mx-3"><span className="far fa-heart"></span></li>
                    <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <div className="tag bg-red">sale</div>
            <div className="title pt-4 pb-1">{prod.title}</div>
            <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
            <div className="price">$ {prod.price}</div>
        </div>
    )
}