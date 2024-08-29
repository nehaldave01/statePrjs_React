import{ useEffect, useState } from 'react'
import Filter from './Filter'
import Display from './Display'
import './Page.css'

const Page1 = () => {
    const [products, setProducts] = useState([])
    const [categories, setcategories] = useState([])

    // on button load fetch data//
    const loadData = async () => {
        const response = await fetch ('https://fakestoreapi.com/products');
        const data = await response.json();
        // console.log(data)
        setProducts(data)
    }

    const category = async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setcategories(data)
    }
    // console.log("Hello")
    // loadData(); //becauz of this use useEffect 
  
    console.log("Hello")
    useEffect(
        () => {
            loadData();
            category();
        },
        []
    )

  return (
    <div className='container'>
        {/* <button onClick={loadData}>Load Data</button> */}
       <div className='row'>
         <Filter categories={categories}/>
         <Display products={products}/>
       </div>
    </div>
  )
}

export default Page1