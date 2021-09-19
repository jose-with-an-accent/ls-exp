export default ({children, title, isClosable, width = "8/12", onClose}) => {
	return(
		<div className="fixed top-0 left-0 bg-opacity-50 bg-black w-full h-full flex items-center justify-center">
			<div className={`bg-white h-2/3 rounded p-5 shadow space-y-3 w-${width}`}>
			{isClosable && <a className="absolute top-2 text-gray-500 text-xl right-3" href="#">&times;</a>}
			<h2 className="text-xl font-bold">{title}</h2>
				{children}
			</div>
		</div>
	)
}
