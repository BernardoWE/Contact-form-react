
import { Span } from '../../pages/Home/styles'
import { Input } from './styles'
function DivInput({ label, error, submitted,value, ...props }) {
 
  
  return (

    <div>

      <label>{label} <Span>*</Span></label>

      <Input $submitted={submitted} {...props} />

      
      {submitted && !value ? <span className='span-error' >{error}</span> : null}

    </div>

  )

}
export default DivInput