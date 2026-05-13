import {TextArea} from "./styles";
import { Span } from '../../pages/Home/styles'
 function DivTextArea(){
    
    return (
    <div>
        <label>
            Message <Span>*</Span>
        </label>
        <TextArea id="message" rows="5" placeholder="Type your message here..."></TextArea>
        {/* <p>This field is required</p> */}
    </div>
    )
}
export default DivTextArea