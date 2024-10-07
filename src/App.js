import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';


import HeaderC from './components/HeaderC';
import Menus from './components/SideBarOptions';
import { BrowserRouter as RouterD, Route, Routes } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <RouterD>
        <ToastContainer />
        <Container>
          <Row>
            <HeaderC />
          </Row>
          
          <Row className='mt-4'>
            <Col md={3} style={
              {
                height:"450px",
                border: "1px solid black",
                overflow: "auto"
              }
            }> <Menus /></Col>
            <Col md={9} style={
              {
                height:"450px",
                border: "1px solid black",
                overflow: "auto"
              }
            }>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-courses" element={<Courses />} exact />
                <Route path="/about" element={<About />} exact />
                <Route path="/contact-us" element={<ContactUs />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </RouterD>
    </div>
  );
}

export default App;
