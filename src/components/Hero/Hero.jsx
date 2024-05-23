import React from 'react'
import WomanImage from '../../assets/hero.png'
import AnimatedShape from './AnimatedShape';
import { Container, Button, Contact, ContactText, Description, Image, Info, Left, Phone, Right, Title } from './Hero.style';


const Hero = () => {
    return (
        <Container>
            <Left>
                <Title>Adventures in creative age</Title>
                <Description>Although web design has a fairly recent history, it can be linked to other areas such as graphic design, user experience, and multimedia arts, but is more aptly seen from a technological standpoint. It has become a large part of people's everyday lives.</Description>
                <Info>
                    <Button>START A PROJECT</Button>
                    <Contact>
                        <Phone>Call On:+91-1234567890</Phone>
                        <ContactText>Please Call On this number</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <div>
                    <Image src={WomanImage} alt="" />
                </div>
            </Right>
            <AnimatedShape/>
        </Container>
    )
}

export default Hero