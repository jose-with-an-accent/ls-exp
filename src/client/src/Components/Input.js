export default ({value, placeholder, onClick, type, className}) => {
	return <input type={type} className={"border-solid border-2 border-gray-300 p-1.5 rounded " + className} placeholder={placeholder} onClick={onClick} value={value} />
}
