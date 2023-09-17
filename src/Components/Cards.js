import Card from "./Card";
import './Cad.css'
import Body from './Body';
const Cards=(props)=>{
   const data=props.shop;
   let fil_arr=[];
   for(let i=1;i<data.length;i++)
   {
            if(data[i].category===props.cat)
            {
                 fil_arr.push(data[i]);
            }
   }
    return(
<div className="Cad">
    {




        fil_arr.map((dat)=>{

           return( <Card key={dat.id} dat={dat}></Card>
        )})
    }
</div>
    )
}

export default Cards;