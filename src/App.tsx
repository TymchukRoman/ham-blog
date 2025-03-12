import { Container } from '@mui/material'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {

  return <Container className='w-full h-screen flex flex-col justify-between'>
    <Header />
    <Content />
    <Footer />
  </Container>
}

export default App
