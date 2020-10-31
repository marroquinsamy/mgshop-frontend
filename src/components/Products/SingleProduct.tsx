import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './SingleProduct.css'
import { IProduct } from './Product'
import * as productService from './ProductService'

interface IParams {
  id: string
}

const SingleProduct = () => {
  const params = useParams<IParams>()

  const [product, setProduct] = useState<IProduct>({
    title: 'Cargando...',
    description: 'Cargando...',
    price: 0,
    imagePath: '',
  })

  const getProduct = async (id: string) => {
    const res = await productService.getProduct(id)
    const { title, description, price, imagePath } = res.data
    setProduct({ title, description, price, imagePath })
  }

  useEffect(() => {
    if (params.id) getProduct(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="single-product">
        <h2 className="page-title">{product.title}</h2>
        <p className="single-product-description">{product.description}</p>
        <p className="single-product-description">
          <b>ID: </b>
          {params.id}
        </p>
        <p className="single-product-price">Q{product.price}</p>
        <div className="single-product-image-container">
          <img
            className="single-product-image"
            src={`${productService.API}/${product.imagePath}`}
            alt={product.title}
            onClick={() =>
              window.open(
                `${productService.API}/${product.imagePath}`,
                '_blank'
              )
            }
          />
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
