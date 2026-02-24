import Nav         from './components/Nav'
import Hero        from './components/Hero'
import About       from './components/About'
import Slate       from './components/Slate'
import Partnership from './components/Partnership'
import Leadership  from './components/Leadership'
import Footer      from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Slate />
        <Partnership />
        <Leadership />
      </main>
      <Footer />
    </>
  )
}
