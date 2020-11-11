import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './SingleProduct.css'
import { IProduct } from './Product'
import * as productService from './ProductService'
import { toast } from 'react-toastify'

interface IParams {
  id: string
}

const SingleProduct = () => {
  const params = useParams<IParams>()

  const [product, setProduct] = useState<IProduct>({
    title: 'Cargando...',
    description: 'Cargando...',
    price: 0,
    imagePath: 'loading',
  })

  const [foundProductState, setFoundProductState] = useState(false)

  const getProduct = async (id: string) => {
    const res = await productService.getProduct(id)
    if (res.data) {
      setFoundProductState(true)
      const { title, description, price, imagePath } = res.data
      setProduct({ title, description, price, imagePath })
    } else {
      setProduct({
        title: 'Producto no encontrado',
        description:
          'El producto que solicitaste no existe, intenta más tarde o ponte en contacto con nosotros mediante nuestro WhatsApp o por nuestra página de Facebook.',
        price: 0,
        imagePath: '',
      })
      setFoundProductState(false)
    }
  }

  const renderProductImage = (imagePath: string) => {
    if (imagePath === 'loading') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-darkreader-inline-fill=""
          className="card-single__image-loader"
        >
          <path d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z"></path>
        </svg>
      )
    }

    if (foundProductState) {
      return (
        <img
          src={`${productService.API}/${product.imagePath}`}
          alt={product.title}
          className="card-single__image"
          onClick={() =>
            window.open(`${productService.API}/${product.imagePath}`, '_blank')
          }
        />
      )
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="240"
        height="240"
        viewBox="0 0 24 24"
        className="card-single__image-missing"
        data-darkreader-inline-fill=""
      >
        <path d="M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"></path>
      </svg>
    )
  }

  const copyId = () => {
    try {
      navigator.clipboard.writeText(foundProductState ? params.id : '---')
      toast.success('ID copiado exitosamente')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (params.id) {
      getProduct(params.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h2 className="page__title">{product.title}</h2>
      <div className="card card-fucsia card-single">
        <div className="card-single__section">
          <p className="card__text card__text-aumented">
            {product.description}
          </p>
          <p className="card__text">
            <b>ID: </b>
            <span
              className="card-single__id"
              onClick={copyId}
              title="Copy to clipboard"
            >
              {foundProductState ? params.id : '---'}
            </span>
          </p>
          <div className="price price-aumented">
            <i className="bx bxs-coin price__icon"></i>
            <span className="price__currency">Q</span>
            {foundProductState ? product.price : '--'}
          </div>
        </div>
        <div className="card-single__image-container">
          {renderProductImage(product.imagePath)}
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
