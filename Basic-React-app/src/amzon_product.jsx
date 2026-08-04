import Title from './title.jsx'
import Price from './price.jsx'
import './amzon_product.css'


function AmzonProduct({title,Description,price}) {
  return (
    <div className="amzon_product">
        
        <h2> {title}</h2>
        <h3> {Description}</h3>
        <Price price={price} />
    </div>
  )
}

export default AmzonProduct;