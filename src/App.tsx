import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import MainLayout from './components/layouts/main';

import Works from './pages/Works';
import About from './pages/About';
import Home from './pages/Home';
import theme from './lib/theme';

import './styles/index.css'



function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <MainLayout>
          <AnimatePresence initial={true} exitBeforeEnter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/works' element={<Works />} />
              <Route path='/about' element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </MainLayout>
      </BrowserRouter>
    </ChakraProvider >
  );
}

export default App;
