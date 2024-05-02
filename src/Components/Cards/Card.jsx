import "./card.css"
let Card=({paradatad})=>{
  
    return(
        <div id="card">
            <div id="card1">
             <p>{paradatad}</p>
            </div>
            <br />
            <div id="card2">
              <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" height={50} width={50} />

              <div id="card2innner">
                <b>Gladis Lennon</b>
                <p>Head of SEO</p>
              </div>
            </div>

        </div>
    )
}
export default Card;