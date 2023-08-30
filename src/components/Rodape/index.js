import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrada } from '../../assets/marca_registrada.svg'
import cacto_code from '../../assets/cacto_code.png'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      
        
      
      
        <MarcaRegistrada />

      
        Desenvolvido por CactoCode

    </footer>
  )
}
