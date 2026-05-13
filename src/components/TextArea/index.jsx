import {TextArea} from "./styles";
import { Span } from '../../pages/Home/styles'
 function DivTextArea({label,submitted, error, ...props}){

    return (
    <div>
        <label>
            {label} <Span>*</Span>
        </label>
        <TextArea $submitted={submitted} {...props} ></TextArea>
        {submitted && !props.value ? <span className='span-error'>{error}</span> : null}
        
    </div>
    )
}
export default DivTextArea