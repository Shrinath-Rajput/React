import Title from "./title.jsx";
import Paragraph from "./paragraph.jsx";

function Product1({Title,price ,feature}) {
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

export default Product1;