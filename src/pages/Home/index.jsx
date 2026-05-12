import { useState } from 'react'
import '../../App.css'
import { Background, Form, ContainerInputsName, Input, ContainerInputEmail, Span, ContainerInputRadio, TextArea, ContainerInputTextArea, ContainerInputCheckbox, Button, Toast } from './styles'
import img from "../../assets/images/icon-success-check.svg";
import DivInput from '../../components/input';

function App() {


    const [showToast, setShowToast] = useState(false)

    function handleToast(e) {
     e.preventDefault()

    setShowToast(true)

    setTimeout(() => {
        setShowToast(false)
    }, 3000)
  }
    
    const[errors, setErrors] = useState({
        name: 'This field is required',
        email: 'Please enter a valid email address',
    })
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    console.log(name)

  return (
    <>
        <Background>

        <Form action="submit" onSubmit={handleToast}>
            <h1>Contact Us</h1>
            <ContainerInputsName>
                <DivInput label="First Name" error={errors.name} type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                <DivInput label="Last Name" error={errors.name} type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                {/* <div>
                
                    <label>
                        First Name <Span>*</Span>
                    </label>
                    <Input type="text" id="first-name"/>
                    <p>This field is required</p> 
                </div>

                <div>
                    <label>
                        Last Name <Span>*</Span>
                    </label>
                    <Input type="text" id="last-name"/>
                    {/* <p>This field is required</p> 
                </div>*/}
            </ContainerInputsName>
            
            
            <ContainerInputEmail>
                <label>
                    Email Address <Span>*</Span>
                </label>
                <Input type="email" id="email"/>
                {/* <p>Please enter a valid email address</p> */}
                {/* This field is required */}
            </ContainerInputEmail>
           <ContainerInputRadio>

                <label>
                    Query Type <Span>*</Span>
                </label> 
                <div>
                    <label htmlFor="general-enquiry" className='radio-option'>
                        <input type="radio" id="general-enquiry" name="query-type"/> 
                        General Enquiry
                    </label>
                    <label htmlFor="support-request" className='radio-option'>
                        <input type="radio" id="support-request" name="query-type"/> 
                        Support Request
                    </label>
                    {/* <p>Please select a query type</p> */}
                </div>
            </ContainerInputRadio>

            <ContainerInputTextArea>
                <label>
                    Message <Span>*</Span>
                </label>
                <TextArea id="message" rows="5" placeholder="Type your message here..."></TextArea>
                {/* <p>This field is required</p> */}
            </ContainerInputTextArea>

            <ContainerInputCheckbox>
                <input type="checkbox" id="consent"/> 
                <label htmlFor="consent">
                    I consent to being contacted by the team <Span>*</Span>
                </label>
                 {/* <p>To submit this form, please consent to being contacted</p> */}
            </ContainerInputCheckbox>

            <Button type='submit' >
                Submit
            </Button>
            
    
            
            

        </Form>
             {showToast && (
            <Toast>
                <header>
                    <img src={img} alt="Success Check" /> 
                    <h2> Message Sent!</h2>
                </header>
                
                <p>Thanks for completing the form. We'll be in touch soon!</p>
                
            </Toast>)}
        </Background>
    </>
  )
}

export default App
