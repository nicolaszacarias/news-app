import Link from "next/link"
import styles from "../../styles/footer.module.css"

const Footer = () => {  
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
                <Link href="/">Home</Link>
                <Link href="/about">about</Link>
            </nav>
            <p className={styles.copyright}>Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer