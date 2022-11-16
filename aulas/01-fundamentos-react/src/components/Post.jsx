import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src="https://github.com/henriquedantass.png" />
                    <div className={styles.authorInfo}>
                        <strong>Henrique Dantas</strong>
                        <span>Front-end Engineer</span>
                    </div>
                </div>

                <time title="16 de Novembro às 18:49" dateTime="2022-11-16 18:49:36">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz junto com o Elon Musk sobre os foguetes. O nome do projeto é Voando Alto 🚀</p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#spacex</a> {' '}
                    <a href="">#pleno2022</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}