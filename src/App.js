import React, {useState} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  Plan  from './Plan';
 
function App() {

   const [ item, setItem ] = useState([]);
   const [text, setText]   = useState("");


 let handleChange =  e =>{
    setText(   e.target.value )
  }

        function addText(){
      
     setItem((prevState) => prevState.concat(text))
   }



   function deleteText(){
      
      setItem((prevState) => prevState.concat(text))
    }


  return (
    <div className =  " container-fluid ">
      <div className = "row">
        <div className = "col-sm-6   text-white shadow-lg p-3">
            <h1 className = "text">Today's Plan</h1>
             <div className = 'row'>
                <div className = "col-9">
                   <input type="text" className= "form-control" placeholder = "write plan here" 
                    value = {text} onChange ={handleChange} />
                </div>

                <div className = "col-2">
                    <button className = "btn btn-warning px-5 fw-bold" onClick = {addText}> Add</button>
                </div>

                  <div  >
                     <ul className = "list-unstyled row m-5 ">
                      {
                         item.map((value) => {
                            return <Plan value = {value} />
                        }) 


                                
                      }
                     </ul>
                  </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
