import React from 'react'
import styled from 'styled-components'
import Laptop from "../../assets/how-to-use-mobile.jpg";


import { Container, Left, Right } from '../Feature/Feature.style';
import MinCard from './MinCard';

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 400px;
    height: auto;
    margin-left: 70px;
`;
const Wrapper = styled.div`
    /* display: flex; */
    padding: 50px;
    /* flex-direction: column; */
`;
const Title = styled.h2`
    font-size: 52px;
    margin: 0;
`;
const Desc = styled.p`
    font-size: 16px;
    margin-top: 15px;
    color: #555;
`;

const CardContainer=styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;
const Button=styled.button`
    padding: 15px 30px;
    background-color: darkblue;
    border-radius: 15px;
    border: none;
    outline: none;
    margin-top: 40px;
    font-size: 16px;
    display: inline-block;
    color: #fff;
`;


const Services = () => {
    return (
        <>
            <Container>
                <Left>
                    <Image src={Laptop} alt="" />
                </Left>
                <Right>
                    <Wrapper>
                        <Title>Simple process to start</Title>
                        <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Desc>
                        <CardContainer>
                            <MinCard></MinCard>
                            <MinCard></MinCard>
                            <MinCard></MinCard>
                        </CardContainer>
                        <Button>Learn More</Button>
                    </Wrapper>
                </Right>
            </Container>
        </>
    )
}

export default Services