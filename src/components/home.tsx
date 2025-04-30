import LogoNetMind from '.././assets/images/NetMind-Logo.png'
import ImgReferenciaUno from '.././assets/images/Burbuja-Uno.svg'
import ImgReferenciaDos from '.././assets/images/Burbuja-Dos.svg'

import './home.css'


function Home() {
  return (
    <body className='body' id='root'>
        <div className='Top-HomePage'>
            <div className='Top-Textos'>
                <h1>¿Quienes somos?</h1>
                <p>NetMind: Un equipo de estudiantes de la UNAM pertenecientes a SIAFI, que buscan colaborar a la sociedad usando herramientas como la inteligencia artificial</p>
            </div>
        <img src={LogoNetMind} alt="" />
        </div>

      <div className='Body-HomePage'>
        <div className='Body-TextosUno'>
            <h2>¿Que hacemos?</h2>
            <p>Una herramienta de inteligencia artificial enfocada a jovenes universitarios para identificar problemas de salud mental causadas por redes sociales</p>
        </div>
        <img className='Body-ImagenUno' src={ImgReferenciaUno} alt="" />
        <div className='Body-TextosDos'>
            <h2>¿Cual es nuestro objetivo?</h2>
            <p>Ayudar a los jovenes que podrian estar en riesgo ya sea desarrollando algun trastorno o problema de salud mental causado por redes sociales</p>
        </div>
        <img className='Body-ImagenDos' src={ImgReferenciaDos} alt="" />
      </div>
      
      <div className='Bottom-HomePage'>
        <p>" No me preocupa que las maquinas piensen como humanos</p>
        <p>Me preocupa que los humanos piensen como maquinas "</p>
        <p>- Tim Berners-Lee.</p>
      </div>
    </body>
  )
}

export default Home
