import styled, { css } from "styled-components"

export const InputWrapper = styled.div<{
    width?: string | number
    type?: string
}>`
    border: 1px solid gray;
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    ${({ width }) => {
        if (typeof width === "string") {
            return css`
                width: ${width};
            `
        }
        if (typeof width === "number") {
            return css`
                width: ${width}px;
            `
        }
    }}
    &.w-5 {
        width: 5%;
    }
    &.w-10 {
        width: 10%;
    }
    &.w-15 {
        width: 15%;
    }
    &.w20 {
        width: 20%;
    }
    &.w-25 {
        width: 25%;
    }
    &.w-30 {
        width: 30%;
    }
    &.w-35 {
        width: 35%;
    }
    &.w-40 {
        width: 40%;
    }
    &.w-45 {
        width: 45%;
    }
    &.w-50 {
        width: 50%;
    }
    &.w-55 {
        width: 55%;
    }
    &.w-60 {
        width: 60%;
    }
    &.w-65 {
        width: 65%;
    }
    &.w-70 {
        width: 70%;
    }
    &.w-75 {
        width: 75%;
    }
    &.w-80 {
        width: 80%;
    }
    &.w-85 {
        width: 85%;
    }
    &.w-90 {
        width: 90%;
    }
    &.w-95 {
        width: 95%;
    }
    &.w-100 {
        width: 100%;
    }
    i.left,
    svg.left {
        padding-right: 0.5rem;
    }
    i.right,
    svg.right {
        padding-left: 0.5rem;
    }
`
export const InputElWrapper = styled.div`
    width: 100%;
`
export const InputEl = styled.input`
    border: none;
    outline: none;
    width: 100%;
    color: currentColor;
    color: inherit;
    /* padding-left: 0.5rem;
    padding-right: 0.5rem; */
    font-size: inherit;
`
export const TextAreaWrapper = styled.div``
