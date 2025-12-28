import LogoSrc from '../assets/images/logo.png'

function ImagensReact() {
  return (
    <div>
        <p>Imagem utilizada através da pasta public</p>
        <img src="./images/logo.png" width="100px" alt="Logotipo do IFSC" />
        <p>Imagem utilizada através da pasta src</p>
        <img src={LogoSrc} width="100px" alt="Logotipo do IFSC" />
    </div>

  )
}

export default ImagensReact