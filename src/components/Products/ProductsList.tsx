import React, { useState, useEffect } from 'react'
import { IProduct } from './Product'
import * as productService from './ProductService'
import ProductsItem from './ProductsItem'
import './ProductsList.css'

const ProductsList = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  const loadProducts = async () => {
    const res = await productService.getProducts()

    const formatedProducts: IProduct[] = res.data
      .map((product) => {
        return {
          ...product,
          createdAt: product.createdAt
            ? new Date(product.createdAt)
            : new Date(),
          updatedAt: product.updatedAt
            ? new Date(product.updatedAt)
            : new Date(),
        }
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    setProducts(formatedProducts)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div className="products-list">
      <h2 className="page-title">Productos</h2>
      <div className="product-item-container">
        {products.map((product) => (
          <ProductsItem
            product={product}
            key={product._id}
            loadProducts={loadProducts}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsList
