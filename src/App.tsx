import './App.css'
import AppBar from './components/Appbar';
import StarField from './components/StarField';
import About from './contents/About';
import Experience from './contents/Experience';
import Projects from './contents/Projects';
import Skills from './contents/Skills';
import Contacts from './contents/Contact';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      <AppBar />
      <Box sx={{width:"100%"}}>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contacts />
      </Box>
      <Footer />
      <StarField />
    </Box>
  )
}

export default App
