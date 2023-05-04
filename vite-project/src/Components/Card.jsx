import"./Card.css"

import Contact from "./Contant";

function Card(props){
    return (
< div  className="cad2">
    <img src={props.imge}/><br/>    

    <h1>{ props.fun} </h1>
    <h2>CEO & CO-FOUNDER</h2>
    <p> heloo it's me heloo it's me heloo it's me </p>
    <Contact conti={props.conti}/>
 

   </div>

    )

}
export default Card;