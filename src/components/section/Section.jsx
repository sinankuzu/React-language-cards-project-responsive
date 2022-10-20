import React from 'react'
import "./Section.css"

const Section = ({myData}) => {

  return (


    <div className="container">
        <h1>Languages</h1>
        <div className="grid-container">
    
    
        {myData.map((eleman)=>{
            
              return (
              <div className="card">
                <img src={eleman.img} alt="" />
              </div>)
        })}
        
    
        </div>

    

    </div>
  )
}

export default Section