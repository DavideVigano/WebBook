import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Book from './pages/Book';
import ReviewPage from './pages/ReviewPage';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import Prova from './pages/Prova';
import Game from './pages/Game';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<Book />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='/prova' element={<Prova />} />
          <Route path='/game' element={<Game />} />
        </Routes >
      </Router >
    </>
  )
}

export default App