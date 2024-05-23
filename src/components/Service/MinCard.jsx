import React from 'react'
import styled from 'styled-components'
import Search from "../../assets/search.png";


const Container=styled.div`
    display: flex;
    flex-direction: column;
    width: 170px;
    padding:15px;
    text-align: center;
    justify-content: center;
    box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
`;
const Image =styled.img`
    width: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;

`;
const Text=styled.p`
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
`;


const MinCard = () => {
  return (
    <>
        <Container>
            <Image src={Search} alt=''/>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?
            </Text>
        </Container>
        
    </>
  )
}

export default MinCard