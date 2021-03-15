import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import {MainWrapper, Container} from "./Layoutcomponents"


const Layout = (props) => {
    return (
        
        <MainWrapper>
          <Header />
          <Container>
          <main>{props.children}</main>
          </Container>
          <Footer />
        </MainWrapper>
       
    )
}

export default Layout
