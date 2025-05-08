import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Registration from "./pages/Registration"
import NewsandGallery from "./pages/NewsandGallery"
import NewsDetail from "./pages/NewsDetail"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsAndGallery" element={<NewsandGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
