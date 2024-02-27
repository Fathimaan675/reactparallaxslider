
import File1 from './File1'
import './App.css'
import  Image3 from './Image3'
import  Image2 from './Image2'
import Textbox from './Textbox'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const sliderRef = useRef(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSettings = {
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  

  return (
  
    <>
     <Navbar bg="white" data-bs-theme="light">
        <Container >
          <Navbar.Brand href="#home">profile</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   <div className='row mb-4'>
      <div className="col-lg-1"></div>
      <div className="col-lg-10"><div>
      <Slider ref={sliderRef} {...sliderSettings}>
        <div>
          <h3>Focus On What You Love</h3>
          <img style={{height:'400px',width:'100%'}} src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
        </div>
        <div>
          <img  style={{height:'400px',width:'100%'}} src="https://images.unsplash.com/photo-1535229398509-70179087ac75?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" />
        </div>
        <div>
          <img style={{height:'400px',width:'100%'}}  src="https://images.unsplash.com/photo-1497888329096-51c27beff665?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" />
        </div>
      </Slider>

    </div></div>
      <div className="col-lg-1"></div>

    </div>
    <File1/>
    <Textbox/>
    <Image2/>
    <Image3/>

    
    </>
  )
}

export default App
