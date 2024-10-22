import { NetflixCards } from "./NetflixCards";

export const CardsData=({data})=>{
    const {id,name,description,genre,img_url,cast,rating}=data
    return (
        <li  key={id}  >
<div>
   <img src={img_url} alt="" width="40%" height="40%"/>
<h4>{name}</h4>
<p>{rating}</p>
<p>{description}</p>
<p>{genre }</p>
<p>{cast}</p>

</div>
        </li>
    )
}