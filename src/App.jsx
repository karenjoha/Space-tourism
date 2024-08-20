import './styles/scss/main.scss';
import Header from './components/header';
import Home from './views/home';
import Crew from './views/crew';
import Technology from './views/technology';
import Destination from './views/destination';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  )
}

export default App
