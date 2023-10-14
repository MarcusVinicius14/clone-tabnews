import styles from "../styles/home.module.css"
function Home () {

function sim() {
    alert("Tambem te amo! <3 :)");
}
    return (
        <div className={styles.conteudo}>
            <h1>Você ama eu?</h1>
            <div className={styles.containerButton}>
                <button onClick={sim} className={styles.btn1}>Sim</button>
                <button className={styles.btn2}>Não</button>
            </div>
        </div>
    )
}

export default Home