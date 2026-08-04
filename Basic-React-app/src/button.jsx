function PrintHello(){
    return(
        console.log("Hello World")
    )
}

export default function Button(){
    return (
        <div >
            <button onClick={PrintHello}>Click me</button>
        </div>
    )

};