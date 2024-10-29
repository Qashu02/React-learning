import "./event.css"
import {useState} from 'react'
export const Eventhandling= ()=>{

    

        const [ user, setUser]=useState([
            {name:'qasim',age:16},
            {name:"ali",age:36},
            {name:"anas",age:17},
        ]);
        const userCount=user.length
      

        const average= (user.reduce((accumulate, curEl)=>accumulate+curEl.age,0)/userCount)
        {console.log(average)}

      return<>
      


        <h2>new user list</h2>
        <ul>
            
     {
        user.map((curEl,idx)=>{
            return<>
                <li key={idx}>
                    {curEl.name}- {curEl.age}
                </li>
            
            </>
        })
     }
        </ul>
        
      
      </>
}