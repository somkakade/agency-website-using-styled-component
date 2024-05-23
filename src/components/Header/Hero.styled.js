import styled from "styled-components";

export const Container = styled.div`
    /* height: 50px;  */
    padding: 0 20px;
`;

export const Wrapper = styled.div`
    padding:5px 0px;
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;

    @media (max-width:768px){
        display: block;
    }
`;
export const Left = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson;
`;
export const Menu = styled.ul`
    display: flex;
`;
export const MenuItem = styled.li`
    margin-right: 40px;
    text-decoration: none;
    list-style-type: none;
    font-weight: bold;
    font-size: 20px;
    color: gray;
`;
export const Button=styled.button`
    border: 2px solid #FFF;
    padding: 10px 20px;
    background-color: crimson;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
`;