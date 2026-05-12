function DivInput({ label, error, ...props }) {

  return (

    <div>

      <label>{label}</label>

      <input {...props} />

      {error && <span>{error}</span>}

    </div>

  )

}
export default DivInput