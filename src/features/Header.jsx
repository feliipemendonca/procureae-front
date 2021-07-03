import React,{useState} from 'react'
import { Navbar, Container, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import GrandMenu from '../components/GrandMenu'
import Img from '../assets/images/logo.png'
import styled from 'styled-components'


const NavHeader = styled(Navbar)`
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 7%);
    z-index: 1;
`

const Brand = styled(NavbarBrand)`
    width: 131px;
`

const Link = styled(NavLink)`
    color : #303033;
    font-weight: 500;

    &:hover{
        color: #d62625;
    }
`


const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <NavHeader fixed="fixed" className="bg-white w-100 position-fixed" expand="false">
                <Container>
                    <Brand href="/">
                        <img src={Img} className="img-fluid pt-3" alt="Procureaê" />
                    </Brand>
                    <Nav className="mr-auto d-flex justify-content-between">
                        <Links/>
                        <NavItem className="d-flex align-items-center">
                             <GrandMenu className />
                        </NavItem>
                    </Nav>
                   
                </Container>
            </NavHeader>
        </>
    )
}

const Links = () =>{
    return(
        <>
            <NavItem className="d-none d-md-block">
                <Link href="/">Home</Link>
            </NavItem>
            <NavItem className="d-none d-md-block">
                <Link href="/">Comprar</Link>
            </NavItem>
            <NavItem className="d-none d-md-block">
                <Link href="/">Vender</Link>
            </NavItem>
            <NavItem className="d-none d-md-block">
                <Link href="/">Ajuda</Link>
            </NavItem>
            <NavItem className="d-none d-md-block">
                <Link href="/">Entrar</Link>
            </NavItem>
                {/* <GrandMenu /> */}
        </>
    )
}

export default Header