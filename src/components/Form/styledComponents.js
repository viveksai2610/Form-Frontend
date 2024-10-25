import {styled} from 'styled-components'

export const Bgcontainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const FormContainer = styled.div`
  padding: 20px;
  box-shadow: 0 4px 6px #d9d9d9, 0 1px 3px #e0e0e0;
  border-radius: 10px;
  background-color: #ffffff;
  width: 280px;
  @media screen and (max-width: 768px) {
    width: 240px;
    padding: 15px;
  }
`

export const MainHeading = styled.h1`
  color: #555555;
  font-size: 25px;
  text-align: center;
`
export const Label = styled.label`
  color: #000000;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const Input = styled.input`
  color: #2e2e2e;
  font-size: 16px;
  padding: 9px;
  width: 80%;
  margin-top: 8px;
  border-radius: 4px;
  border-color: #000000;
  border-width: 2px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const Textarea = styled.textarea`
  color: #2e2e2e;
  font-size: 16px;
  padding: 9px;
  width: 80%;
  margin-top: 8px;
  border-radius: 4px;
  border-color: #000000;
  border-width: 2px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const InputContainer = styled.div`
  margin-bottom: 15px;
`
export const SubmitButton = styled.button`
  height: 38px;
  width: 90px;
  font-size: 16px;
  background-color: #007fff;
  color: #ffffff;
  border-radius: 6px;
  border-width: 0px;
  margin-top: 5px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`
export const SuccesMessage = styled.p`
  color: #28a745;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`
export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-left: 6px;
`
