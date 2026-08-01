function MessageBox({message,username,textcolor}){
    return(
        <div className="messagebox" >
            <h1 style={{color: textcolor}}>{message}{username}</h1>
           
        </div>
    )
}

export default MessageBox;