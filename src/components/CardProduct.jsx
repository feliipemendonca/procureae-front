import React from 'react'
import { Card, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import Img from '../assets/images/product.png'

const CardProduct = styled(Card)`
    box-shadow: 1px 1px 3px 1px rgb(0 0 0 / 9%);
    width: 97%;
`

const Bg = styled.div`
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    height: 250px;
    transition: 0.5s all;

    @media(min-width: 768px){
        height: 217px;
    }

    @media(min-width: 992px){
        height: 200px;
    }
`

const Title = styled(CardTitle)`
    font-size: 17px;
`

const Success = styled.a`
    background: #0ee07f;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;

    &:hover{
        color: #fff;
    }
`

const Canceled = styled.a`
    background: #f3f5f8;
    color: rgb(102, 102, 102);
    text-decoration: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;

    &:hover{
        color: rgb(102, 102, 102);
    }
`

const Text = styled(CardText)`
    font-size: 12px;
    font-weight: 500;
    color: rgb(102, 102, 102);
`

const Footer = styled(CardFooter)`
    font-size: 12px;
    font-weight: 600;
    color: rgb(102, 102, 102);
`

const _Card = () => {
    return (
        <CardProduct className="border-0">
            <Bg />
            <CardBody>
                <Title tag="h5">Card title</Title>
                <Title tag="h5">R$ 190,00</Title>
                <Text className="py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</Text>
                <div className="d-flex justify-content-between">
                    <Success className="px-5 px-lg-4 py-2"><strong>Comprar</strong></Success>
                    <Canceled className="px-5 px-lg-4 py-2"><strong>Ver</strong></Canceled>
                </div>            
            </CardBody>
            <Footer className="bg-white border-0">
                <FontAwesomeIcon icon={faMapMarker} /> Cidade
            </Footer>
        </CardProduct>
    )
}

export default _Card