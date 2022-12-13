//import React from 'react'
import React, { useEffect, useState } from 'react'
import {products} from '../../productsMock'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

     const[product,setProduct]= useState({})
     const{id}= useParams()
console.log(id)
useEffect( ()=>{

    const productSelected = products.find(producto=> producto.id ===2)
    setProduct(productSelected)

  },[id])


console.log(product)
return(
    <div>
    
    <h1>product.name</h1>
    <h2>product.price</h2>
    <h2>product.description</h2>
    </div>
  )
}

export default ItemDetailContainer
