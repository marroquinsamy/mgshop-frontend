import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IProduct } from './Product'
import './ProductsItem.css'
import { API } from './ProductService'

interface IProps {
  product: IProduct
  loadProducts: () => void
}

const ProductsItem = ({ product, loadProducts }: IProps) => {
  const history = useHistory()

  return (
    <article
      className="card card-pink card-product"
      onClick={() => history.push(`/products/${product._id}`)}
    >
      <h4 className="card__title">{product.title}</h4>
      <p className="card__text card__text-limited">{product.description}</p>
      <img
        src={`${API}/${product.imagePath}`}
        className="card__picture"
        alt=""
      />
      <footer className="footer-card">
        <div className="price">
          <i className="bx bxs-coin price__icon"></i>
          <span className="price__currency">Q</span>
          <span className="price__number">{product.price}</span>
        </div>
        <Link className="footer-card__link" to={`/products/${product._id}`}>
          <i className="bx bx-right-arrow-alt footer-card__icon"></i>
          <span className="footer-card__text">Más detalles</span>
        </Link>
      </footer>
    </article>
  )
}

export default ProductsItem
