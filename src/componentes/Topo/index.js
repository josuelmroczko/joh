import foto from  './foto2.jpg'
import './Topo.css'
import Competencias from './../modal/index';

function Topo () {
    return(
<>

<div className="apresentacao">
<h1> Olá eu sou o Josuel.</h1>
<p>Iniciei Engenharia de software em março de 2022 e venho mergulhando em React atualmente. 
    Minhas competências são da area de front end. <br/><br/>  Conheço JAVASCRIPT ,HTML5 ,CSS ,SASS, FLEXBOX e GIT</p>
<Competencias/>



<div className="caixafoto">
    <img className="foto" src={foto} alt="foto josuel " />
</div>
</div>
</>
    )
}

export default Topo