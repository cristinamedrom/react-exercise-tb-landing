import React from 'react'
import './App.css'

export default function Navbar() {
    return (
        <div className='navbarall'>

                <img src="https://tf-thebridge-production-public-files.s3.eu-west-1.amazonaws.com/the_bridge_logo_dark_47d5d8a798.svg"
                    alt="Logo The Bridge"
                />
                <p>Cursos <img className='imagflecha' src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png?20220428125430" alt="flecha" /></p>
                <p>Dónde estudiar <img className='imagflecha' src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png?20220428125430" alt="flecha" /></p>
                <p>Financiación y becas <img className='imagflecha' src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png?20220428125430" alt="flecha" /></p>
                <p>Empresas e instituciones <img className='imagflecha' src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png?20220428125430" alt="flecha" /></p>
                <p>Sobre nosotros <img className='imagflecha' src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png?20220428125430" alt="flecha" /></p>

        </div>
    )
}