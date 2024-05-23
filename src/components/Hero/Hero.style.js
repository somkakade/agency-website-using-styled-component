import styled from "styled-components";


export const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
`;
export const Left = styled.div`
    width: 60%;
`;
export const Right = styled.div`
    width: 40%;
`;

export const Title=styled.h1`
    font-size: 60px;
    font-weight: bold;
    margin: 0;
    width: 60%;
`;

export const Description=styled.p`
    font-size: 16px;
    margin: 0;
    width: 60%;
    margin-top: 10px;
`;
export const Info=styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;
export const Button=styled.button`
    padding: 10px 25px;
    background-color: darkblue;
    border: 1px solid darkblue;
    color: #fff;
    border-radius: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor:pointer;
    display: inline-block;
`;

export const Contact=styled.div`
    display: flex;
    /* width: 100%; */
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
export const Phone=styled.span`
    color: #F0667D;
`;
export const ContactText=styled.span`
color: gray;
`;

export const Image=styled.img`
width: 100%;
max-width: 600px;
`;