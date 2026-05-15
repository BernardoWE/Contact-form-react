// import { QueryInput } from "./styles";

import { QueryLabel } from "./styles"



function DivQueryInput( {checked, error, submitted, value, type, onChange, id,name,p, ...props}) {
    
    
   

    return (
        <div>
            <QueryLabel
            {...props}
            $submitted={submitted}
            $checked={checked} >
                <input onChange={onChange} type={type} id={id} name={name} value={value} checked={checked}/>
                <p>{p}</p>
                
            </QueryLabel>
            
        </div>
        
    )
}

export default DivQueryInput