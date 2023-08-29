import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrada } from '../../assets/marca_registrada.svg'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      
        <img className={styles.cactocode}
          src='./assets/cacto_code.png' />
      
      
        <MarcaRegistrada />

      
        Desenvolvido por CactoCode

    </footer>
  )
}
