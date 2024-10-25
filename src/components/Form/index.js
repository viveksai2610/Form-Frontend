import {useState} from 'react'

import {
  Bgcontainer,
  FormContainer,
  MainHeading,
  Label,
  Input,
  Textarea,
  InputContainer,
  SubmitButton,
  SuccesMessage,
  ErrorMessage,
} from './styledComponents'

const Form = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  const [succesMessage, setSuccesMessage] = useState('')
  const [nameErrorMessage, setNameErrorMessage] = useState('')
  const [mailErrorMessage, setMailErrorMessage] = useState('')
  const [messageErrorMessage, setMessageErrorMessage] = useState('')

  const onChangeName = event => setName(event.target.value)
  const onChangeMail = event => setMail(event.target.value)
  const onChangeMessage = event => setMessage(event.target.value)

  const onSubmitForm = () => {
    console.log('triggred')
    if (name !== '' && mail.endsWith('@gmail.com') && message !== '') {
      setSuccesMessage('Thank you! Your details have been saved.')
      setNameErrorMessage('')
      setMailErrorMessage('')
      setMessageErrorMessage('')
      setName('')
      setMail('')
      setMessage('')
    }
    if (name === '') {
      setNameErrorMessage('*Required')
    }
    if (mail === '') {
      setMailErrorMessage('*Required')
    }
    if (mail !== '' && mail.endsWith('@gmail.com') === false) {
      setMailErrorMessage('Enter a valid email address')
      if (name !== '') {
        setNameErrorMessage('')
      }
      if (message !== '') {
        setMessageErrorMessage('')
      }
    }
    if (message === '') {
      setMessageErrorMessage('*Required')
    }
  }

  return (
    <Bgcontainer>
      <SuccesMessage>{succesMessage}</SuccesMessage>
      <FormContainer>
        <MainHeading>Form</MainHeading>
        <InputContainer>
          <Label htmlFor="name">Name</Label>
          <br />
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={onChangeName}
          />
          <ErrorMessage>{nameErrorMessage}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="name">Email</Label>
          <br />
          <Input
            type="text"
            placeholder="example@gmail.com"
            value={mail}
            onChange={onChangeMail}
          />
          <ErrorMessage>{mailErrorMessage}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="name">Message</Label>
          <br />
          <Textarea
            rows="5"
            cols="30"
            placeholder="message"
            value={message}
            onChange={onChangeMessage}
          >
            .
          </Textarea>
          <ErrorMessage>{messageErrorMessage}</ErrorMessage>
        </InputContainer>
        <SubmitButton onClick={onSubmitForm}>Submit</SubmitButton>
      </FormContainer>
    </Bgcontainer>
  )
}
export default Form
