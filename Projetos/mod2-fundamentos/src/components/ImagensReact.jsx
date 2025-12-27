// Para insirir um ativo que esta na pasta source e em assets deve primeiramente importar
import ViteImg from '../assets/images/vite.svg' 

function ImagensReact() {



  return (
    <div>

    {/*Imagem insirida a partir da pasta public */}
    <p>Logo insirida atráves da pasta public.</p>
    <img src="./public/images/logoIFSC.png" width="128px" alt="Logo do IFSC" />

    <p>Imagem insirida atráves da pasta source (src)</p>
    <img src={ViteImg} width="128px" alt="Logo do Vite" />
    </div>
  )
}

export default ImagensReact