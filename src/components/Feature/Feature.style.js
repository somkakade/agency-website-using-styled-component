import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        padding: 100px 0;
        position: relative;
        justify-content: center;
        align-items: center;
`;
export const Left = styled.div`
        width: 50%;
`;
export const Right = styled.div`
        width: 50%;
        margin-left: 25px;
`;
export const Image = styled.img`
        width  :100% ;
        max-width: 700px;
        height: auto;
`;

export const Title = styled.h2`
        font-size: 70px;
        margin: 0;
`;
export const SubTitle = styled.h3`
        font-size: 24px;
        font-style: italic;
        color: #333;
        padding-top: 20px;
        margin: 0;
`;
export const Description = styled.p`
        font-size: 20px;
        color: #777;
        padding-top: 10px;
        margin: 0;
`;
export const Button = styled.button`
        border: none;
        padding: 10px 25px;
        background-color: darkblue;
        color: #fff;
        border-radius: 20px;
        font-size: 16px;
        letter-spacing: 1px;
        cursor: pointer;
        margin-top: 20px;
`;