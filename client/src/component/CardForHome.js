import barcelona from './barcelona.png'
import spain1 from './spain1.jpg'

import england from './england.jpg'
import london from './london.jpg'
const CardForHome=()=>{
  
  
  
    return(
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={barcelona} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Spain,Barcelona</h5>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={spain1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Spain,Madrid</h5>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={london} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">England,London</h5>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={spain1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Egypt,Cairo</h5>
        
      </div>
    </div>
  </div>
</div>
    )
}
export default CardForHome;