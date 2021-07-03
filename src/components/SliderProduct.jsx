import React, { Component } from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import Product from './CardProduct'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Title = styled.h1`
    color: rgb(102, 102, 102);
    font-size: 26px;
` 

const Carousel = styled(Slider)`
    .slick-list{
        height: 470px;
    }

    @media(max-width: 768px){
        height: 69vh;
    }
`

class SectionProducts extends Component{

    render(){
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <>
                <Container className="py-5">
                    <Title className="pb-3"><strong>Lorem Ipsum</strong></Title>
                    <Carousel {...settings}>
                        <div className="d-flex justify-content-center">
                            <Product className="my-2" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <Product className="my-2" />
                        </div>  
                        <div className="d-flex justify-content-center">
                            <Product className="my-2" />
                        </div>  
                        <div className="d-flex justify-content-center">
                            <Product className="my-2" />
                        </div>  
                        <div className="d-flex justify-content-center">
                            <Product className="my-2" />
                        </div>              
                    </Carousel>
                </Container>
                <Container className="py-5">
                    <Title className="pb-3"><strong>Lorem Ipsum</strong></Title>
                    <Carousel {...settings}>
                        <div className="d-flex justify-content-center">
                            <Product className="my-2" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <Product className="my-2" />
                        </div>  
                        <div className="d-flex justify-content-center">
                            <Product className="my-2" />
                        </div>  
                        <div className="d-flex justify-content-center">
                            <Product className="my-2" />
                        </div>  
                        <div className="d-flex justify-content-center">
                            <Product className="my-2" />
                        </div>              
                    </Carousel>
                </Container>
            </>
        )
    }
}

export default SectionProducts