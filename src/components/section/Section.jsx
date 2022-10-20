import React from 'react'
import "./Section.css"

const Section = ({myData}) => {

  return (


    <div className="card">
        <h1>Languages</h1>
        <div className="my-card">
    
    
        {myData.map(()=>{
            
              return (
              <div className="info">
                <img src={myData.img} alt="" />
              </div>)
        })}
        
    
        </div>

    

    </div>
  )
}

export default Section