import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/devnilo.png" />
                    <div className={styles.authorInfo}>
                        <strong>Danilo Araujo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="16 de Novembro às 18:49" dateTime="2022-11-16 18:49:36">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="">jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}