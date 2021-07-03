import React,{useState} from 'react'
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Img from '../assets/images/logo.png'
import styled from 'styled-components'


const NavHeader = styled(Navbar)`
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 7%);
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
            <NavHeader fixed="fixed" expand="lg">
                <Container>
                    <Brand href="/">
                        <img src={Img} className="img-fluid pt-3" alt="Procureaê" />
                    </Brand>
                    <NavbarToggler />
                    <Collapse isOpen={isOpen} navbar className="d-none d-lg-flex justify-content-end">
                        <Nav className="mr-auto" navbar>
                            <Links />
                        </Nav>
                    </Collapse>
                </Container>
            </NavHeader>
        </>
    )
}

const Links = () =>{
    return(
        <>
            <NavItem>
                <Link href="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link href="/">Comprar</Link>
            </NavItem>
            <NavItem>
                <Link href="/">Vender</Link>
            </NavItem>
            <NavItem>
                <Link href="/">Ajuda</Link>
            </NavItem>
            <NavItem>
                <Link href="/">Entrar</Link>
            </NavItem>
            <NavItem>
                <Link>
                    <FontAwesomeIcon icon={faBars} />
                </Link>
                
            </NavItem>
        </>
    )
}

export default Header