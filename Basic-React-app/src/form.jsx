function HandlerForm(event){
    event.preventDefault();
    return(
        console.log("Form submitted")

        
    )
}

export default function Form(){
    let style={
        color: "black",
        backgroundColor:"gray",
    }
    return(
        <div style={style}>
            <form onSubmit={HandlerForm}>
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
