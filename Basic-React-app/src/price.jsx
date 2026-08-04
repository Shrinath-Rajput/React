function Price({ price }) {
    let style={
        textDecoration: "line-through",
        color: "red",
        backgroundColor: "yellow",
    }
    let newstyle={
        fontWeight: "bold",
        backgroundColor: "yellow",
    }
   
  return (
    <div >
      <p style={style}> ₹{price}</p>
      <p style={newstyle}> ₹{price * 0.8}</p>
    </div>
  );
}

export default Price;