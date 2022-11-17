import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/devnilo.png',
      name: 'Danilo Araujo',
      role: 'Front-end Developer',
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz junto com o Elon Musk sobre os foguetes. O nome do projeto é Voando Alto 🚀' },
      { type: 'link', content: '#novoprojeto #spacex #pleno2022' },
    ],

    publishedAt: new Date('2022-11-16 18:50:23')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/henriquedantass.png',
      name: 'Henrique Dantas',
      role: 'Front-end Developer',
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz junto com o Elon Musk sobre os foguetes. O nome do projeto é Voando Alto 🚀' },
      { type: 'link', content: '#novoprojeto #spacex #pleno2022' },
    ],

    publishedAt: new Date('2022-11-17 19:32:28')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div >
  )
}

