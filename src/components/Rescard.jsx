function Rescard(props){
  return(
    <div className='rescard'>
   <img id='pizza' alt={props.name} src={"https://media-assets.swiggy.com/swiggy/image/upload/" + props.imgurl}/>
   <h2>{props.name}</h2>
   <p>{props.areaName}</p>
   <h3>{props.avgRating}</h3>
   <h4> {props.cuisines} </h4>
   <h4> {props.locality} </h4>

    </div>
  )
}
export default Rescard;