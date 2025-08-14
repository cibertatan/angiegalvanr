import { Layout, Hero, About, MyServices } from './components'

function App() {
  return (
    <Layout>
      <div className="bg-accent min-h-screen">
        <Hero />
        <About />
        <MyServices />
      </div>
    </Layout>
  )
}

export default App
