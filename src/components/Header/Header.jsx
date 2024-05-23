import React from 'react'
import { Container,Wrapper,Left,Logo,Menu,MenuItem,Button } from './Hero.styled'


const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Logo>Agency</Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                </Left>
                <Button>JOIN TODAY</Button>
            </Wrapper>
        </Container>
    )
}

export default Header