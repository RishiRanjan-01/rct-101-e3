import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from '../Products/Product/Product';
import styles from './Products.module.css'

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/products")
    .then ((res) => {
      console.log(res.data)
      setData(res.data)
    })
  },[])

  return <div className={styles.maindiv}>{/* Code here */}
  {/* <h3>Products</h3> */}
  {data.map((item)=>{
     return <div key={item.id}>
       <Product {...item}/>
     </div>
  })}
  </div>;
};

export default Products;
