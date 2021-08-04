import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    margin: auto;
`

export const SectionTitle = styled.h2`

`

export const SectionText = styled.p`

      margin: 1rem 0 2rem;
`

export const Label = styled.label`
      padding: .25rem;
`

export const Input = styled.input`
      width: 100%;
      height: 2rem;
      
`

export const Form = styled.form`
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      

`

export const Textarea = styled.textarea`
      min-width: 100%;
      min-height: 10rem;
`

export const Button = styled.button`
    background: #e31500;
    padding: 1rem 2rem;
    color: #fff;
    outline: none;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 3px;
    width: 300px;
    border: 2px transparent solid;
    margin: 2rem 0;

    &:hover {
        background: transparent;
        color: #e31500;
        border: 2px solid #e31500;
  }
`

