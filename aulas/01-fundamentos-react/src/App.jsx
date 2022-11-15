import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Danilo Araujo"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut dolores iusto mollitia corporis deleniti dicta quia reiciendis numquam animi molestiae molestias, voluptatem quibusdam inventore, voluptas et? Itaque, nisi voluptas."
      />

      <Post
        author="Henrique Dantas"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, iusto. Sit doloremque unde numquam sequi, cumque voluptatum ab fuga molestias harum maiores dicta ea quia temporibus quae commodi praesentium inventore."
      />
    </div>
  )
}