import { NetflixCards } from "./NetflixCards";

export const CardsData=({data})=>{
    const {id,name,description,genre,img_url,cast,rating,watch_url}=data
    return (
      
        <li  key={id}  >

<div className=" card">
   <img  className="card-image"src={img_url} alt="" width="40%" height="40%"/>

   
<div className="card-data">
<h4>{name} <button className="offer">{rating}</button></h4>
<p>{description}</p>
<p>{genre }</p>
<p>{cast}</p>

   <div>

   </div>
   </div>
<button className="btn">
    <a href={watch_url}>Watch Now</a>
</button>

</div>
        </li>
    )
}