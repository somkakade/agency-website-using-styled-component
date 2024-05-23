import React from 'react'
import styled from 'styled-components'

const Square = styled.div`
        width: 60px;
        height: 60px;
        background-color: #4e6bff;
        position: absolute;
        opacity: 0.7;
        top: -60px;
        left: -60px;
        border-radius: 50%;
        z-index: -1;
        animation: square 25s linear alternate infinite;

        @keyframes square {
            from{

            }
            to{
                    transform: translate(100vw,100vh);
            }
        }
`;
// 

const Circle = styled.div`
        width: 100px;
        height: 100px;
        background-color: pink;
        position: absolute;
        opacity: 0.7;
        top: 200px;
        left: -100px;
        border-radius: 50%;
        z-index: -1;
        animation: circle 25s linear alternate infinite;

        @keyframes circle {
            from{

            }
            to{
                    transform: translate(100vw,-100vh);
            }
        }
`;
// 
const Rect = styled.div`
        width: 50px;
        height: 100px;
        background-color: pink;
        position: absolute;
        opacity: 0.7;
        top: 400px;
        left: -60px;
        /* border-radius: 50%; */
        z-index: -1;
        animation: rect 25s linear alternate infinite;

        @keyframes rect {
            from{

            }
            to{
                    transform: translate(100vw,50vh);
            }
        }
`;


const AnimatedShape = () => {
    return (
        <>
            <Square />
            <Circle/>
            <Rect/>
        </>
    )
}

export default AnimatedShape