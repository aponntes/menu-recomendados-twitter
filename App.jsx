import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import Button from './Button'
import HelloPerson from './HelloPerson';
function App() {
  const[nome, setNome] = useState("");

  const pessoas  = [
    {
        nome: "SpaceX",
        username: "@SpaceX",
        foto: "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg"
        
    },
    {
      nome: "NASA",
      username: "@NASA",
      foto: "https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg"
    },
    {
      nome: "Jeff Bezos",
      username: "@JeffBezos",
      foto: "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
    }
  ];
  return (
    <div>
    <HelloWorld/>
    { pessoas.map((pessoa, key) => {
      return<HelloPerson 
      key= {key}
      nome={pessoa.nome} 
      username={pessoa.username}
      foto= {pessoa.foto}
      />
    })}
    <p><a href="">Mostrar Mais</a></p>
    </div>

  )
}

export default App
