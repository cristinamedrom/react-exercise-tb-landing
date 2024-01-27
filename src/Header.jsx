import React from 'react'
import './App.css'

export default function Header() {
    return (
        <div className='headerall'>
            <div className='textoheader'>
                <h1>Acelera tu carrera digital.</h1>
                <h2>En una epoca de cambios y desarrollo tecnológico, tu formación no puede perder el ritmo.</h2>
                <p>Cuando eliges un bootcamp en The Bridge estás dando el paso definitivo hacia una de las profesionas del futuro más demandadas en el presente, ya sea Ciberseguridad, Data Science, Desarrollo de Software, Diseño de Producto UX/Ui o Marketing Digital.</p>
                <button className='buttonheader'>PIDE INFORMACIÓN</button>
            </div>
            <div>
                <img src="https://i.postimg.cc/mkWKJjw3/estudiantes.png"
                    alt="Personas estudiando"
                    className='imagenheader'
                />
            </div>
        </div>
    )
}
