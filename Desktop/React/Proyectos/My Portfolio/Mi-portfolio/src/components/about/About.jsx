import React from 'react';
import "./about.css"
import yo2 from "../../img/unnamed.jpg"
import Cv from "../../img/Cv.pdf"

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
              <div className="a-card bg"></div>
              <div className="a-card">
                    <img src={yo2}
                    alt="" 
                    className="a-img"
                    />
              </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio earum dicta delectus enim saepe est facere eius? Animi facere odio aut tempore suscipit mollitia numquam commodi ex consequuntur error!
            </p>
            <p className="a-desc">
              Soy desarrollador frontend, comencé a escribir mi primer código desde los 14 años. Siempre he buscado la manera de solucionar problemas cotidanos a través del maravilloso mundo de la programación. Actualmente tengo 18 y me mantengo en constante búsqueda de conocimiento. Soy autodidacta, proactivo, sé trabajar en equipo y dirigir uno.
            </p>
            <div className="a-curriculum">
              <button type="button" class="btn btn-success">
                  <a download="CV - Emilio Sagasta"
                  href={Cv}
                  > 
                  Descargar CV
                  </a>
              </button>
            <div className="a-github">
              <button type="button" class="btn btn-success">
                  Mi GitHub
              </button>
            </div>
            <div className="a-linkedin">
              <button  onClick={"https://www.linkedin.com/in/emiliosagasta/"}
                >
                Ver Linkedin
              </button>
            </div>
            </div>
         </div>
    </div>
  )
}

export default About