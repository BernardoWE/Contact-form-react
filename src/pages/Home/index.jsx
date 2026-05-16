import { useState } from 'react'
import '../../App.css'
import { Background, Form, ContainerInputsName, ContainerInputEmail, Span, ContainerInputRadio,ContainerInputTextArea, ContainerInputCheckbox, Button, Toast } from './styles'
import img from "../../assets/images/icon-success-check.svg";
import DivInput from '../../components/DivInput/input';
import DivTextArea from '../../components/TextArea/index';
import DivQueryInput from '../../components/QueryInput/index';

function App() {

    
    const [showToast, setShowToast] = useState(false)
    function handleToast() {

    console.log(name)
    setShowToast(true)

    setTimeout(() => {
        setShowToast(false)
    }, 3000)
  }
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [textMessage, setTextMessage ] = useState('')
    const [query, setQuery] = useState('')
    
    const[errors, setErrors] = useState({
        name: 'This field is required',
        email: 'Please enter a valid email address',
        
    })
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e){
       setSubmitted(true)
        
         e.preventDefault()
         if (name && lastName && email && textMessage && query ) {
            handleToast()
            
         }
         
    }
    
  return (
    <>
        <Background>

        <Form noValidate action="submit" onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <ContainerInputsName>
                <DivInput label="First Name" error={errors.name} type="text" value={name} submitted={submitted} onChange={(e) => setName(e.target.value)}/>

                <DivInput label="Last Name" error={errors.name} type="text" value={lastName} submitted={submitted} onChange={(e) => setLastName(e.target.value)}/>
               
            </ContainerInputsName>
            
            
           
            <ContainerInputEmail>
                 
                <DivInput label="Email Addres" error={errors.email} type="email" value={email} submitted={submitted} onChange={(e) => setEmail(e.target.value)}/>
                
                
            </ContainerInputEmail>

           <ContainerInputRadio>

                <p>
                    Query Type <Span>*</Span>
                </p> 
                <section >
                            <label  className={submitted && !query
                                ? "radio-option error"
                                : "radio-option"} htmlFor="general-enquiry">
                                <input 
                                type="radio"
                                value="general-enquiry"
                                checked={query === "general-enquiry"}
                                onChange={(e) => setQuery(e.target.value)}
                                name="query-type"
                                id="general-enquiry"
                                />
                                <p>General Enquiry</p>
                                
                            </label>
                              <label  className={submitted && !query
                                ? "radio-option error"
                                : "radio-option"} htmlFor="support-enquiry">
                                <input 
                                type="radio"
                                value="support-enquiry"
                                checked={query === "support-enquiry"}
                                onChange={(e) => setQuery(e.target.value)}
                                name="query-type"
                                id="support-enquiry"
                                />
                                <p>Support Request</p>
                                
                            </label>
                            
                       
                
                    
                    </section>
                    {submitted && !query ? <span className='span-error'>Please select a query type</span> : null}
                   
                    {/* <label htmlFor="general-enquiry" className='radio-option'>
                        <input type="radio" id="general-enquiry" name="query-type"/> 
                        <p>General Enquiry</p>
                    </label> */}
                    {/* <label htmlFor="support-request" className='radio-option'>
                        <input type="radio" id="support-request" name="query-type"/> 
                        <p>Support Request</p>
                    </label> */}
                    {/* <p>Please select a query type</p> */}
                
            </ContainerInputRadio>

            <ContainerInputTextArea>
                <DivTextArea 
                value={textMessage} 
                submitted={submitted}
                onChange={(e) => setTextMessage(e.target.value)} 
                error={errors.name} 
                submitted={submitted} 
                label="Message" 
                id="message" 
                rows="5" 
                placeholder="Type your message here..." 
                />
                
            </ContainerInputTextArea>

            <ContainerInputCheckbox>
                <input type="checkbox" id="consent" /> 
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
