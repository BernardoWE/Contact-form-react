
import { Span } from '../pages/Home/styles'
import { Input } from './styles'
function DivInput({ label, error, submitted, ...props }) {
 
  
  return (

    <div>

      <label>{label} <Span>*</Span></label>

      <Input {...props} value={props.value} onChange={props.onChange} />

      {/* {error && <span>{error}</span>} */}
      {submitted && !props.value ? <span>{error}</span> : null}

    </div>

  )

}
export default DivInput