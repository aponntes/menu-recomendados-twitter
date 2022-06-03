import Button from './Button';
import './HelloPerson.css';

function HelloPerson({nome, username, foto}){
    return(
       <div className="container">
           <img
           className='img' 
           src={foto} 
           alt={nome}
           width ="80px"
           height="80px"
           />
           {nome &&
            <p className="desc">
                {nome} <br></br>
                {username}
             </p>
             }
            <Button/>
       </div>
    )
    
}
export default HelloPerson;