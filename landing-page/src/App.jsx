// Vite provides a way of importing css files using the Node Modules syntaxt
import './styles/normalize.css'
import './styles/palettes.css'
import './styles/typography.css'
import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { CustomSection } from './components/CustomSection/CustomSection'
import { ArticleCard } from './components/ArticleCard/ArticleCard'

import { articlesResponse } from './data/articles'

function App() {
  return (
    <div className='App'>
      <Navbar />

      <main>
        <CustomSection id='top'>
          <h1>Section Top</h1>
        </CustomSection>

        <CustomSection id='mid'>
          <h1>List of articles</h1>
          <ul className='articleList'>
            {articlesResponse.articles.map(
              (article) => {
                return (
                  <li key={article.slug}>
                    <ArticleCard {...article} />
                  </li>
                )
              }
            )}
          </ul>
        </CustomSection>

        <CustomSection id='bot'>
          <h1>Section Bottom</h1>
        </CustomSection>
      </main>

      <Footer />
    </div>
  )
}

export default App
