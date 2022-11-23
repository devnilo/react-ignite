import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://scontent.faqa1-1.fna.fbcdn.net/v/t39.30808-6/285263607_2017205592002164_6326338706643950696_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE8K3z7KzDhHtvmy-yKtTupLP4IiBOMVVYs_giIE4xVVviwyon_iWXA7wkyhFuka8FW9uwqt8fW-1zhhAPtZsoY&_nc_ohc=4_1X15cp6E0AX-aek06&_nc_ht=scontent.faqa1-1.fna&oh=00_AfBxhqQG4mmiTcl-laEXX2BezcTC3cNz9wMWQlOySJlQ0A&oe=6383B646',
      name: 'Victória Santos',
      role: 'Digital Influencer',
    },

    content: [
      { type: 'paragraph', content: 'Oii gente' },
      { type: 'paragraph', content: 'Tem video novo no canal, pedi pra vocês mandarem perguntas lá no Instagram e aproveitei para responder em video!!' },
      { type: 'paragraph', content: 'Deixem seus likes e compartilhem para os amigos verem os babados.' },
      { type: 'link', content: '#detudoumpouco' },
    ],

    publishedAt: new Date('2022-11-16 18:50:23')
  },
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
                key={post.id}
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

