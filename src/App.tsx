// JSX - JavaScript + XML (HTML)

import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { PostType } from "./components/Post"

import styles from "./App.module.css"

import './global.css'

// author: { avatar_url: "", name: "", role: "" }
//publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/mjepis7.png',
      name: 'Maria Eduarda',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},       
    ],
    publishedAt: new Date('2023-10-29 18:40:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋'},
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      { type: 'link', content: 'devonlane.design'},       
    ],
    publishedAt: new Date('2023-10-30 07:40:00'),
  },
]

// iteração - criar uma estrutura de repetição

// sempre que for fazer uma iteração dentro do jsx, deve-se usar o map, pois ele tem retorno, já o forEach não

export function App() {
  return (
    // No react, não pode ter multiplos elementos sem ter algo por volta deles
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>    
    </div>
  )
}

