import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
        <Navbar  variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYr-r-BGg0B3X2nXtKkHg-ytlHUnBMqPoPlQ&usqp=CAU"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />&nbsp; &nbsp;{' '}
            Mario's Resturant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header