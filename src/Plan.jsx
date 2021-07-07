import React from 'react'

  const Plan = (props) => {
    return (
        <div>
            
           <li className = "shadow p-2 my-2 col-sm-9"> {props.value} 
           <button className = "btn btn-danger my-2 col-sm offset-1"  onClick =  {() =>  props.sendData(props.id)} >Remove</button>
           </li>
           
            
        </div>
    )
}

export default Plan;