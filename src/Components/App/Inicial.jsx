import { Link } from 'react-router-dom'

import classes from './Inicial.module.css'

function Inicial() {
  return (
    <div className={classes.Container}>
      <div className={classes.Header}>
        <h1> Trust </h1>

        <Link id="Cliente" to="area"> Área do Cliente </Link>
      </div>
      <div className={classes.Body}>
        <div className={classes.Banner}>
          <Link id="Cotacao" to="Cotacao"> Faça sua cotação </Link>
        </div>
        <div className={classes.Sobre}>
          <h1> Sobre Nós </h1>
          <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi dolores natus. Obcaecati quae iste perspiciatis 
            similique quidem, facere aliquam. Reprehenderit obcaecati quis ipsam, eveniet aspernatur a voluptas consectetur et. 
          </p>
        </div>
      </div>
      <div className={classes.Footer}>
          <h1> Copyright@PedroLobato2024 </h1>
      </div>
    </div>
  )
}

export default Inicial
