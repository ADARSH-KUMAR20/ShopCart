import './Footer.css'
const Footer=()=>{
    return(

        <div className="Fot">
                    <div className="News">
                                    <h1>
                                      Newsletter
                                    </h1>
                                    <br></br>
                                    <h5>
                                      Get News about articles and updates in your inbox
                                    </h5>
                                    <h1 className="Get">GET <br></br>IN TOUCH</h1>
                    </div>
                              <div className="form">
                                        <form className="iform" >
                                            <input placeholder="NAME"></input>
                                            <hr></hr>
                                            <input placeholder="EMAIL"></input>
                                            <hr></hr>
                                            <input placeholder="MESSAGE"></input>
                                            <hr></hr>
                                            <button>SEND</button>
                                        </form>
                              </div>



        </div>
    )
}
export default Footer;