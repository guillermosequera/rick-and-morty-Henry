import styled from "styled-components";

export const DivSearch = styled.div`
    padding: 1em;
    display: flex;
    justify-content: center;
`

export const Input = styled.input`
    border-radius: 0.5em;
    background-color: gray;
    margin-left: 0.5em;
    padding: 0.5em;
    border: yellow solid;
    font-size: 1em;
    font-weigth: 500;
    position: relative;
    &:hover {
        background-color: white;
        color: black;
    }
`

export const Button = styled.button`
    border-radius: .5em;
    background-color: gray;
    color: white;
    transition: 0.1s all;
    &:hover {
        cursor: pointer;
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
`