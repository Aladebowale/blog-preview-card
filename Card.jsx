import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardData} from "../Data/CardData";


const  Card = ()=>{

    return(
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'centre', padding: '10px'}}>
            {CardData.map((card,index)=>(
                <div Key={index} style={{margin: '10px',padding: '20px',height: '300px',border: '1px solid black', boxShadow: 'gray 1px 10px 10px', borderRadius: '20px'}}>
                    <FontAwesomeIcon icon={card.icon} style= {{fontSize: '30px'}}/>
                    <h5 >{card.title}</h5>
                    <p>{card.description}</p>
                </div>
            ))}

        </div>
    )
}
export default Card
