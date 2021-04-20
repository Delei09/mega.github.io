import React, { Fragment } from 'react'
import Card from './Card'
import './Mega.css'
import {useState} from 'react'

export default props => {
    let numero = [0,0,0,0,0,0];
    let [numeros , setNumeros] = useState(numero)

function numeroAleatorio(){
    return Math.floor(Math.random() * (60 - 1 ) + 1)
}

function Sorteio (){
    clear()
    for(let i = 0;  i < 6; i ++){
        numeros.push(parseInt( numeroAleatorio()))
    }
    numeros.sort((a,b) => a-b) 
    console.log(numeros)
    let teste = new Set(numeros)
    let a = [...teste]
    let ok = a.length == 6 ? a : numero
    setNumeros(ok)
    }


function clear(){
    numeros =  []
}
return (<div className = 'container'>
         < Card  titulo = 'Sorteio dos numeros da Mega Sena'>
             <Fragment>
                <h2>{numeros.join(' - ')}</h2>
                <button onClick ={Sorteio}>Sortear</button>
            </Fragment>
           </Card>
        </div>)
}