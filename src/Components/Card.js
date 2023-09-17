import './Card.css'
const Card=(props)=>{
    let str=props.dat.description;
    if(str.length>100)
    {
        str=str.substring(1,100);
    }
    return(

    <div className="Card1">
       
    <div>
    <img src={props.dat.image} alt=''></img>
    
    <h3>{props.dat.title}</h3>
    <p>{str+"...."}</p>
    </div>
    </div>

    )
}

export default Card;