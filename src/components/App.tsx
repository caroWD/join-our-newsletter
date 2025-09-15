import { StrictMode, useState } from 'react'
import { Form } from './Form'
import { Message } from './Message'

export const App = () => {
  const [step, setStep] = useState(false)

  const handleStep = () => {
    setStep(!step)
  }

  return (
    <StrictMode>
      {!step ? <Form handleClick={handleStep} /> : <Message handleClick={handleStep} />}
    </StrictMode>
  )
}
