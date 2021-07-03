import React from 'react'
import { Container, Form, Input } from 'reactstrap'
import Img from '../assets/images/lupa.png'
import styled from 'styled-components'

const Section = styled.section`
    background-color: #f3f5f8;
`
const Text = styled.div`
    text-align: center;
`

const FormSeach = styled(Form)`
    .form-control{
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        padding: 10px;
        width: 80%;
        color: rgb(102, 102, 102);
        font-weight: 600;
    }
`

const Lupa = styled.div`
    img{
        position: absolute;
        margin-left: -48px;
        margin-top: 6px;
    }
`


const SeachForm = () => {
    return (
        <Section>
            <Container className="py-5">
                <Text className="pt-5 pb-2">
                    <h3 className="text-center pt-4"><strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </strong></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non repellendus necessitatibus voluptates hic. </p>
                </Text>
                <FormSeach className="d-flex justify-content-center">
                    <Input type="seach" placeholder="Procureaê" className="rounded-fill" />
                    <Lupa>
                        <img src={Img} alt="Seacher" />
                    </Lupa>
                </FormSeach>
            </Container>
        </Section>
    )
}

export default SeachForm