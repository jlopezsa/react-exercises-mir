import React from "react"

function Body(props){
    return(
        <div>
            {props.content}
        </div>
    )        
}

// misma función usando arrow functions
/* 
const Body = (props) => {
    return (
      <div>
        {props.content}
      </div>
    )
}
*/

export default Body