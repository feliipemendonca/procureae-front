import React from 'react'
import { Container, Row, Col, ListGroup, ListInlineItem } from 'reactstrap'
import styled from 'styled-components'

const Rodape = styled.footer`
    background-color: #303033;
`

const ListItem = styled(ListInlineItem)`
    color: #fff;
`
const Footer = () => {
    return(
        <Rodape className="py-5 mt-5">
            <Container>
                <Row>
                    <Col md={6} lg={3}>
                        <ListGroup type="unstyled" className="d-flex">
                            <ListItem><strong>Institucional</strong></ListItem>
                            <br />
                            <ListItem>Quem Somos</ListItem>
                            <ListItem>Politícas de Acesso</ListItem>
                            <ListItem>Termos de Uso</ListItem>
                            <ListItem>Faq</ListItem>
                            <ListItem>Blog</ListItem>
                        </ListGroup>
                    </Col>
                    <Col md={6} lg={3}>
                        <ListGroup type="unstyled" className="d-flex">
                            <ListItem><strong>Institucional</strong></ListItem>
                            <br />
                            <ListItem>Lorem ipsum</ListItem>
                            <ListItem>Phasellus iaculis</ListItem>
                            <ListItem>Nulla volutpat</ListItem>
                        </ListGroup>
                    </Col>
                    <Col md={6} lg={3}>
                        <ListGroup type="unstyled" className="d-flex">
                            <ListItem><strong>Institucional</strong></ListItem>
                            <br />
                            <ListItem>Lorem ipsum</ListItem>
                            <ListItem>Phasellus iaculis</ListItem>
                            <ListItem>Nulla volutpat</ListItem>
                        </ListGroup>
                    </Col>
                    <Col md={6} lg={3}>
                        <ListGroup type="unstyled" className="d-flex">
                            <ListItem><strong>Institucional</strong></ListItem>
                            <br />
                            <ListItem>Lorem ipsum</ListItem>
                            <ListItem>Phasellus iaculis</ListItem>
                            <ListItem>Nulla volutpat</ListItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </Rodape>
    )
}

export default Footer