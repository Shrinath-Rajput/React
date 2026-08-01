import Product1 from "./product1";
import Title from "./title";
import Paragraph from "./paragraph";

function Product2({Title,price ,feature}) {
  if(price>10000){
    return (
    <div className="product2" style={{backgroundColor:"pink"}}>
      
      <Title  />
      <h1> {Title}</h1>
      <h3>Price: {price}</h3>
      <h4> {feature.name} , {feature.age} , {feature.team}</h4>
      <p>Discount: 10%</p>
      <Paragraph />
      
    </div>
  );}else{
    return (
    <div className="product2">
      
      <Title  />
      <h1> {Title}</h1>
      <h3>Price: {price}</h3>
      <h4> {feature.name} , {feature.age} , {feature.team}</h4>
      <Paragraph />
      
    </div>
  );
    
  }

}
export default Product2;