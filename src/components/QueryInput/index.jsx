// import { QueryInput } from "./styles";



function DivQueryInput( {error, submitted, value, type, onChange, id,name,p, ...props}) {
    
    return (
        <div>
            <label {...props}>
                <input  onChange={onChange} type={type} id={id} name={name} value={value}/>
                <p>{p}</p>
                
            </label>
            {submitted && !value ? <span className='span-error'>{error}</span> : null}
        </div>
        
    )
}

export default DivQueryInput