import Title from "./title.jsx";
import Paragraph from "./paragraph.jsx";

function Product1({Title,price ,feature}) {
  if(price>20000){

     return (
    
    <div className="product1" style={{backgroundColor:"red"}}>
      <Title  />
      <h1>{Title}</h1>
      <h3>Price: {price}</h3>
      <h4> {feature.name} , {feature.age} , {feature.team}</h4>
      <Paragraph />
      <p>Discount: 10%</p>
      
    </div>
  );

  }else{
     return (
    
    <div className="product1">
      <Title  />
      <h1>{Title}</h1>
      <h3>Price: {price}</h3>
      <h4> {feature.name} , {feature.age} , {feature.team}</h4>
      <Paragraph />
      
    </div>
  );
  }



 
}

export default Product1;