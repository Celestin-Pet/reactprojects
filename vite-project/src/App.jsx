import"./App.css"


import Card from "./Components/Card.jsx"
import cardImg1 from"./assets/image2.png";
import cardImg2 from"./assets/image1.png";
import cardImg3 from"./assets/image3.png";
 
function App(){
return(  
 
  <div className="cad">
    <Card
     imge={cardImg2} fun={"robert"}  
     conti="call"
     />                   
    <Card imge={cardImg1} fun ={"alinee"}   conti="number"/>
    <Card imge={cardImg3} fun ={"amzaa"}   conti="done"/>
    


  
    
    
  </div>

)

}
export default App;