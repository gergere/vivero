
const Button = ({ texto, color, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{ backgroundColor: color, margin: "10px", padding: "1rem", borderRadius: "5px", border: "1px solid white", cursor:"pointer" }}

      >
        {texto}
      </button>
    </>
  )
}

export default Button