import {TextArea} from "./styles";
import { Span } from '../../pages/Home/styles'
 function DivTextArea({label,submitted, error, ...props}){

    return (
    <div>
        <label>
            {label} <Span>*</Span>
        </label>
        <TextArea {...props}></TextArea>
        {submitted && !props.value ? <span>{error}</span> : null}
        {/* <p>This field is required</p> */}
    </div>
    )
}
export default DivTextArea