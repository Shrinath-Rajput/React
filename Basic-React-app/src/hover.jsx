function Handleover(){

    return(
        console.log("hovered")
    )
}

function Doubleclick(){
    return(
        console.log("double clicked")
    )
}

export default function Hover(){
    let style={
        color: "black",
        backgroundColor: "red",
    }
    return(
        <div style={style}>
            <p onMouseOver={Handleover}>virat kohli</p>
            <button onDoubleClick={Doubleclick}>double click me</button>
        </div>

    )
}
    
    