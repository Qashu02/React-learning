import SeriesData from "../API/SeriesData.json"
import { CardsData } from "./CardsData"

export const NetflixCards=()=>{
return<>

<h2 class="main-heading ">Netflix Sries</h2>
<ul  className="container grid">

{SeriesData.map((CurrEl)=>{
    return(
  <CardsData key={CurrEl.id} data={CurrEl}/>
    )
})}

</ul>
</>
}
