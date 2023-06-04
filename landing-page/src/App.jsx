// Vite provides a way of importing css files using the Node Modules syntaxt
import './styles/normalize.css'
import './styles/palettes.css'
import './styles/typography.css'
import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />

      <main>
        <section id='top'>
          <h1>Section Top</h1>

        </section>

        <section id='mid'>
          <h1>Section Middel</h1>

        </section>

        <section id='bot'>
          <h1>Section Bottom</h1>

        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
