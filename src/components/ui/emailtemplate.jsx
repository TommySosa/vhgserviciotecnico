import React from 'react'

export default function EmailTemplate({ content, from, subject }) {
    return (
        <div>
            <p>Te llegó un correo de: {from}</p>
            <p>Con el asunto: {subject}</p>
            <p>Contenido: </p>
            {content}
        </div>
    )
}
