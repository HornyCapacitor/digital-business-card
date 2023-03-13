import './App.css'
import Picture from "./components/Picture.jsx"
import UserInformation from "./components/UserInformation.jsx"
import Buttons from "./components/Buttons.jsx"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <div className="card">
        <Picture />
        <UserInformation />
        <Buttons />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App