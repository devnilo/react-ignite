import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.18169-9/22154154_10155872687414756_6216990283354943718_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7BuirAHqqWkAX8zPrmM&_nc_ht=scontent.fcgh10-1.fna&oh=00_AfBFVSygCX93HOzCHhxH6TM_M7Ss6rScycYF3zZQjeEo2w&oe=639E246C" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Demi Lovato</strong>
                            <time title="16 de Novembro às 16:49" dateTime="2022-11-16 16:49:36">Cerca de 2h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Curtir <span>7</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}