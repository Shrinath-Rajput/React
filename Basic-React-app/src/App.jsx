
import './App.css'
// import './product1.css'
// import './product2.css'

// import Paragraph from './paragraph.jsx'
// import Product1 from './product1.jsx'
// import Product2 from './product2.jsx'

import AmzonProduct from './amzon_product.jsx'
import Title from './title.jsx'
import Price from './price.jsx'
import './amzon_product.css'
import Button from './button.jsx'
import Hover from './hover.jsx'

function App() {
  return (
    <>
      <Title Title="Amzon Products" />

      <div className="products">
        <AmzonProduct
          title="Iphone 14 pro max"
          Description="Latest iPhone with advanced features"
          price={10000}
        />

        <AmzonProduct
          title="Dell XPS 15"
          Description="High-performance laptop for professionals"
          price={20000}
        />

        <AmzonProduct
          title="Samsung Galaxy S21"
          Description="Flagship smartphone with cutting-edge technology"
          price={15000}
        />

        <AmzonProduct
          title="Sony WH-1000XM4"
          Description="Industry-leading noise-canceling headphones"
          price={3000}
        />

        
      </div>
      <Button />
      <Hover />
    </>
  );

}

export default App
