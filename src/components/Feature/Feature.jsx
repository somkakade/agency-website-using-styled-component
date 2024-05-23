import React from 'react'
import Phone from "../../assets/card3.png";
import { Button, Container, Description, Image, Left, Right, SubTitle, Title } from './Feature.style';


const Feature = () => {
    return (
        <>
            <Container>
                <Left>
                    <Image src={Phone} alt="" />
                </Left>
                <Right>
                    <Title>Good Design</Title>
                    <SubTitle>What is Lorem Ipsum?</SubTitle>
                    <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit tempore placeat, consectetur id praesentium ducimus?</Description>
                    <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit tempore placeat, consectetur id praesentium ducimus?</Description>
                    <Button>Learn More</Button>
                </Right>
            </Container>
        </>
    )
}

export default Feature