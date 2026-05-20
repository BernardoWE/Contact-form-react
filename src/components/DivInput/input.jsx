
import { Span } from '../../pages/Home/styles'
import { Input } from './styles'
function DivInput({ label, error, submitted,value, ...props }) {
 
  
  return (

    <div>

      <label>{label} <Span>*</Span></label>

      <Input $submitted={submitted} value={value} {...props} />

      <span className='span-error' >{error}</span>
     

    </div>

  )

}
export default DivInput