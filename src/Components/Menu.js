import './Menu.css'
const Menu=(props)=>{
const cat=props.output;
return(
<div className='But'>
    {
        cat.map((data)=>{
          return(
            <div>
                <button onClick={()=>{
                  props.setCat(data)
                }} >{data}</button>
            </div>
          )  
        })
    }
    </div>
)
}
export default Menu;