
import { Span } from '../pages/Home/styles'
import { Input } from './styles'
function DivInput({ label, error, ...props }) {

  return (

    <div>

      <label>{label} <Span>*</Span></label>

      <Input {...props} value={props.value} onChange={props.onChange} />

      {error && <span>{error}</span>}

    </div>

  )

}
export default DivInput