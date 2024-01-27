import React from 'react'
import './App.css'

export default function Cards() {
    return (
        <div className='cardsall'>
            <div className='textocards'>
                <p className='exptext'>EXPERIENCIAS FORMATIVAS QUE CAMBIARÁN TU CARRERA</p>
                <h1>Descubre nuestros
                    <br />Bootcamps</h1>
            </div>
            <div className='cardindv'>
            <div className='carddata'>
                    <div className='titlecard'>
                        <h3>Ciberseguridad</h3>
                        <img src="https://i.postimg.cc/ZKyw62N7/cib.png"
                            alt="Logo bootcamp Data Science"
                            className='imagcard' />
                    </div>
                    <div className='buttonscard'>
                        <button className='buttomcard'><img className='vectorcar' src='https://cdn-icons-png.flaticon.com/512/992/992700.png' alt='vector reloj' /> 480</button>
                        <button className='buttomcard'><img className='vectorcar' src='https://cdn-icons-png.flaticon.com/512/17/17736.png' alt='vector ubicacion' /> Presencial/Remoto</button>
                    </div>
                    <p>Con nuestro bootcamp adquirirás os conocimientos para ser miembro de un equipo Red Team o Blue Team utilizando las estrategias y herramientas más actuales, en uno de los mejores programas del mundo en 2021.</p>
                    <br />
                    <div className='buttonred'><button className='redinfo'>+ INFO</button></div>
                </div>
                <div className='carddata'>
                    <div className='titlecard'>
                        <h3>Data Science</h3>
                        <img src="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a649ad574f4fc2cffa3f94_DS.svg"
                            alt="Logo bootcamp Data Science"
                            className='imagcard' />
                    </div>
                    <div className='buttonscard'>
                        <button className='buttomcard'><img className='vectorcar' src='https://cdn-icons-png.flaticon.com/512/992/992700.png' alt='vector reloj' /> 480</button>
                        <button className='buttomcard'><img className='vectorcar' src='https://cdn-icons-png.flaticon.com/512/17/17736.png' alt='vector ubicacion' /> Presencial/Remoto</button>
                    </div>
                    <p>Aprenderás Python, sus librerías de análisis de datos y de Machine Learning y Deep para construir y desplegar modelos y mostrar su utilidad al negocio.</p>
                    <br />
                    <div className='buttonred'><button className='redinfo'>+ INFO</button></div>
                </div>
                <div className='carddata'>
                    <div className='titlecard'>
                        <h3>Desarrollo Web Full Stack</h3>
                        <img src="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a64a28aaa7f58060aa5dcb_FS.svg"
                            alt="Logo bootcamp Desarrollo Web Full Stack"
                            className='imagcard' />
                    </div>
                    <div className='buttonscard'>
                        <button className='buttomcard'><img className='vectorcar' src='https://cdn-icons-png.flaticon.com/512/992/992700.png' alt='vector reloj' /> 480</button>
                        <button className='buttomcard'><img className='vectorcar' src='https://cdn-icons-png.flaticon.com/512/17/17736.png' alt='vector ubicacion' /> Presencial/Remoto</button>
                    </div>
                    <p>Con nuestro bootcamp te transformarás en un desarrollador Web Full Stack. Aprende desde cero HTML, JavaScript node.JS y bases de datos. Acelera tus proyectos utilizando ReactJS, y conoce los fundamentos de DevOps para el despliegue y mantenimiento de tus proyectos.</p>
                    <br />
                    <div className='buttonred'><button className='redinfo'>+ INFO</button></div>
                </div>
                <div className='carddata'>
                    <div className='titlecard'>
                        <h3>Digital Marketing OPS</h3>
                        <img src="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6af5f8903204be404b0_DM.svg"
                            alt="Logo bootcamp Digital Marketing OPS"
                            className='imagcard' />
                    </div>
                    <div className='buttonscard'>
                        <button className='buttomcard'><img className='vectorcar' src='https://cdn-icons-png.flaticon.com/512/992/992700.png' alt='vector reloj' /> 480</button>
                        <button className='buttomcard'><img className='vectorcar' src='https://cdn-icons-png.flaticon.com/512/17/17736.png' alt='vector ubicacion' /> Presencial/Remoto</button>
                    </div>
                    <p>Una aproximación práctica al Marketing Digital que te permitirá conocer las ultimas herramientas y los nuevos medios, con foco en la planificación, análisis y automatización para la optimización de resultados. * Becas L'Oréal Digital Marketing Ops</p>
                    <br />
                    <div className='buttonred'><button className='redinfo'>+ INFO</button></div>
                </div>
                <div className='carddata'>
                    <div className='titlecard'>
                        <h3>UX/UI Product Design</h3>
                        <img src="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a649f7b1cdbc9d2f9b93be_PD.png"
                            alt="Logo bootcamp UX/UI Product Design"
                            className='imagcard' />
                    </div>
                    <div className='buttonscard'>
                        <button className='buttomcard'><img className='vectorcar' src='https://cdn-icons-png.flaticon.com/512/992/992700.png' alt='vector reloj' /> 480</button>
                        <button className='buttomcard'><img className='vectorcar' src='https://cdn-icons-png.flaticon.com/512/17/17736.png' alt='vector ubicacion' /> Presencial/Remoto</button>
                    </div>
                    <p>Te familiarizarás con conceptos clave sobre experiencia de usuario: metodologías de investigación y análisis de datos, arquitectura de la información, ideación y principios del diseño visual y de experiencia de usuario. * Becas Opinno Digital Experience</p>
                    <br />
                    <div className='buttonred'><button className='redinfo'>+ INFO</button></div>
                </div>
            </div>
        </div>
    )
}
