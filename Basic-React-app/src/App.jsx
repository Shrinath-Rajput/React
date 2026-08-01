
import './App.css'
import './product1.css'
import './product2.css'
import Title from './title.jsx'
import Paragraph from './paragraph.jsx'
import Product1 from './product1.jsx'
import Product2 from './product2.jsx'

function App() {
  let mobile={name:"Iphone 14 pro max",age:1,team:"Apple"}
  let labtop={name:"Dell XPS 15",age:2,team:"Dell"}
  return (
    <div>
      <Title Title="Products "/>
      <Product1 Title="Phone" price={10000} feature={mobile}/>
      <Product2 Title="Laptop" price={20000} feature={labtop}/> 
    </div>
  )
}

export default App
