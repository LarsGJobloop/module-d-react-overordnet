// Vite provides a way of importing css files using the Node Modules syntaxt
import './styles/normalize.css'
import './styles/palettes.css'
import './styles/typography.css'
import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { CustomSection } from './components/CustomSection/CustomSection'
import { ArticleCard } from './components/ArticleCard/ArticleCard'

import { getAllArticles, getArticle } from './data/crudOperations'

function App() {
  const articles = getAllArticles();
  const singleArticle = getArticle("You-cant-transmit-the-firewall-without-copying-the-1080p-SDD-interface!-120863")

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
            {
              articles.map(
                (article) => {
                  return (
                    <li key={article.slug}>
                      <ArticleCard {...article} />
                    </li>
                  )
                }
              )
            }
          </ul>
        </CustomSection>

        <CustomSection id='bot'>
          <h1>Get a single article here</h1>
          {
            singleArticle
              ? <ArticleCard {...singleArticle} />
              : <h2>No Articles found</h2>
          }
        </CustomSection>
      </main>

      <Footer />
    </div>
  )
}

export default App
