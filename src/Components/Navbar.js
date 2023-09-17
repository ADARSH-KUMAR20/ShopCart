import './Nav.css'
const Navbar=(props)=>{
 
    const nav=props.Data;
    return(
<div>
        <div className="shop"> 
            
            <h1>
                SHOP KART
            </h1>
            <div className='inner'>
            <h3>
                WISHLIST(0)
                </h3>
                <h3>
                    BAG
                </h3>
            
            </div>
            </div>
              <hr ></hr>
            
        <div className="Nav">
      
      {
               nav.map((data)=>{
                return (
                    <h1 key={data.id}>
                        
                          <button>{data.name}</button>
                        
                    </h1>
                )
               })

      }
            
        </div>
        </div>
    )



}

export default Navbar;