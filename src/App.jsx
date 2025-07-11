import { Layout, Hero, About } from './components'

function App() {
  return (
    <Layout>
      <div className="bg-accent min-h-screen">
        <Hero />
        <About />
      </div>
    </Layout>
  )
}

export default App
