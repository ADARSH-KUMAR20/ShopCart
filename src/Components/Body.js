import { useEffect, useState } from 'react';
import {categrory,ecart} from './Data'
import Menu  from './Menu';
import {FaArrowLeft,FaArrowRight}  from 'react-icons/fa';
import './Body.css'
import Cards from './Cards';
const Body=()=>{
const[output,setoutput]=useState(null);
const[shop,setShop]=useState(null);
const[cat,setCat]=useState(null);
async function url_fetc()
{
try{
    const res= await fetch(categrory);
    const out=await res.json();
    const res1=await fetch(ecart);
    const out1=await res1.json();
    setShop(out1);
    setoutput(out);
    setCat(out1[0].category);
}
catch(err)
{
console.log(err);
}


}
useEffect(()=>{
url_fetc();
},[])
console.log(cat);
return(
        <div>
            <div className="NewPro">
              <div>
                <h1>
                New Products
                </h1>
                <hr></hr>
              </div>
              <div>
                   <div className="arrow">
                    <h2>
                    <FaArrowLeft color='#979797'></FaArrowLeft>
                    </h2>
                    <h2>
                    <FaArrowRight color='#979797'></FaArrowRight>
                    </h2>
                   </div>
                   
              </div>
            </div>
            <div className='Card'>
              <div className='list'>
        {
        (output!==null)?(<Menu cat={cat} setCat={setCat} output={output} setoutput={setoutput}></Menu>):(console.log("value is null"))
}
</div>
<div className='Ecart'>
{
(shop!==null)?(<Cards shop={shop} cat={cat} setCat={setCat} setShop={setShop}></Cards>):(console.log("value is null"))

  }
  </div>
        </div>
        </div>
    )
}
export default Body;