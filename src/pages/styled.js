import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 80vw;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    border: 0px solid #ddd;
`
export const Row = styled.div`
    width: 100%;
    border: 0px solid #ddf;
    margin-top: 8px;
`
export const Col = styled.div`
    border: 0px solid #fdd;
`
export const ColRight = styled(Col)`
    text-align: right;
`
export const Label = styled.label`
    width: 100%;
`
export const Input = styled.input`
    width: 100%;
`
export const InputReadOnly = styled(Input)`
    &:read-only,
    &:disabled {
        background-color: lightgray;
    }
    &::after {
        content: "no"
    }
`
export const Button = styled.button`
    
`