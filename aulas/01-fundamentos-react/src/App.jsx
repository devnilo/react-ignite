import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://scontent.fcgh10-1.fna.fbcdn.net/v/t39.30808-6/285263607_2017205592002164_6326338706643950696_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cdQWQAXoC1wAX--fh2V&_nc_ht=scontent.fcgh10-1.fna&oh=00_AfBqn6LFJ4XJc18eNNrlJZqDLdeJi6QjXF2cLfK8ODAfqQ&oe=637BCD46',
      name: 'Victória Santos',
      role: 'Digital Influencer',
    },

    content: [
      { type: 'paragraph', content: 'Oii gente' },
      { type: 'paragraph', content: 'Tem video novo no canal, pedi pra vocês mandarem perguntas lá no Instagram e aproveitei para responder em video!!' },
      { type: 'link', content: '#detudoumpouco' },
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

