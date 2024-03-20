import { useContext, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  // const [backgroundColor, setBackgroundColor] = useState(localStorage.getItem('backgroundColor') || '#ffffff');
  const {color, fontSize} = useContext(ThemeContext);

  let page = null;
  switch (currentPage) {
    case 'about':
      page = <About/>
      history.pushState({ page: 'about' }, '', '/about');
      break;
    default:
      page = <Home/>
      history.pushState({ page: 'home' }, '', '/');
      break;
  }

  return (
    <div style={{ backgroundColor: color, fontSize: fontSize + 'px' }}>
      <NavBar changeCurrentPage={p => setCurrentPage(p)}/>
      <main className='md:container md:mx-auto'>
        {page}
      </main>
    </div>
  )
}

export default App
