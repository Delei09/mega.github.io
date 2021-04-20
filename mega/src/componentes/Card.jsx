import React from 'react'
import './Card.css'

export default props => {
    return (
    <div className = ' card'>
        <h2 className = 'titulo'>{props.titulo}</h2>
        <h3 className = 'conteudo'>{props.children}</h3>
    </div>
    )
}