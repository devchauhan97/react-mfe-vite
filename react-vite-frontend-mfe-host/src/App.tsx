import './App.css'
import AppRouter from './routes'

function App() {
  return (
    <>
      <section id="center">
        <AppRouter />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
