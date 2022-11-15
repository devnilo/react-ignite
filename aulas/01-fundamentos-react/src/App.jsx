import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Danilo Araujo"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic mollitia rem corrupti? Recusandae at corporis iure adipisci natus esse neque explicabo obcaecati! Recusandae totam illo tempora deleniti mollitia rerum."
          />

          <Post
            author="Henrique Dantas"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quaerat illo ab, pariatur, rerum non error suscipit id voluptates quo blanditiis ipsam, repellendus unde nam tenetur eligendi. Placeat, atque cupiditate."
          />
        </main>
      </div>
    </div >
  )
}

