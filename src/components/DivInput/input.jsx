
import { Span } from '../../pages/Home/styles'
import { Input } from './styles'
function DivInput({ label, error, submitted, ...props }) {
 
  
  return (

    <div>

      <label>{label} <Span>*</Span></label>

      <Input $submitted={submitted} {...props} value={props.value} onChange={props.onChange} />

      {/* {error && <span>{error}</span>} */}
      {submitted && !props.value ? <span className='span-error'>{error}</span> : null}

    </div>

  )

}
export default DivInput