import React, { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Collapse, Container, Nav, NavLink, NavItem } from 'reactstrap'
import styled from 'styled-components'

const Icon = styled(FontAwesomeIcon)`
    font-size: 16px
    cursor: pointer;
    &:hover{
        color: #d62625;
    }
`

const Navbar = styled(Collapse)`
    top: 100%;
    left: 0;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 7%);
    z-index: 9;
`

const Link = styled(NavLink)`
    color : #303033;
    font-weight: 500;

    &:hover{
        color: #d62625;
    }
`

const IconLink = styled(FontAwesomeIcon)`
    color: #d62625;
    margin-right: 10px;
`

const _Menu = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <>
            <Icon icon={faBars} onClick={toggleNavbar} />
            <Navbar isOpen={!collapsed} navbar className="position-absolute w-100 bg-white py-5">
                <Container>
                    <Nav className="d-flex justify-content-between">
                        <NavItem className="w-auto">
                            <Link href="/">
                                <IconLink icon={faShoppingCart} />Categoria de Produto
                            </Link>
                        </NavItem>
                        <NavItem className="w-auto">
                            <Link href="/">
                                <IconLink icon={faShoppingCart} />Categoria de Produto
                            </Link>
                        </NavItem>
                        <NavItem className="w-auto">
                            <Link href="/">
                                <IconLink icon={faShoppingCart} />Categoria de Produto
                            </Link>
                        </NavItem>
                        <NavItem className="w-auto">
                            <Link href="/">
                                <IconLink icon={faShoppingCart} />Categoria de Produto
                            </Link>
                        </NavItem>
                        <NavItem className="w-auto">
                            <Link href="/">
                                <IconLink icon={faShoppingCart} />Categoria de Produto
                            </Link>
                        </NavItem>
                        <NavItem className="w-auto">
                            <Link href="/">
                                <IconLink icon={faShoppingCart} />Categoria de Produto
                            </Link>
                        </NavItem>
                        <NavItem className="w-auto">
                            <Link href="/">
                                <IconLink icon={faShoppingCart} />Categoria de Produto
                            </Link>
                        </NavItem>
                        <NavItem className="w-auto">
                            <Link href="/">
                                <IconLink icon={faShoppingCart} />Categoria de Produto
                            </Link>
                        </NavItem>
                        <NavItem className="w-auto">
                            <Link href="/">
                                <IconLink icon={faShoppingCart} />Categoria de Produto
                            </Link>
                        </NavItem>
                        <NavItem className="w-auto">
                            <Link href="/">
                                <IconLink icon={faShoppingCart} />Categoria de Produto
                            </Link>
                        </NavItem>
                        <NavItem className="w-auto">
                            <Link href="/">
                                <IconLink icon={faShoppingCart} />Categoria
                            </Link>
                        </NavItem>
                        <NavItem className="w-auto">
                            <Link href="/">
                                <IconLink icon={faShoppingCart} />Produto
                            </Link>
                        </NavItem>
                    </Nav> 
                </Container>                       
            </Navbar>
        </>
    )
}

export default _Menu