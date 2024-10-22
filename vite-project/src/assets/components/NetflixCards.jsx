import SeriesData from "../API/SeriesData.json"
import { CardsData } from "./CardsData"
export const NetflixCards=()=>{
return<>
<ul>


{SeriesData.map((CurrEl)=>{
    return(
  <CardsData key={CurrEl.id} data={CurrEl}/>
    )
})}

</ul>
</>
}
