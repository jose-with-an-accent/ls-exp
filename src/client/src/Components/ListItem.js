export default ({name, options, image}) => {
	return <ul className="flex flex-row justify-between">
		<li className="font-bold flex-row flex"> {image && <img src="" width={30} height={30} className="rounded-full mr-2 bg-gray-700"/>} {name}</li>
		<div className="flex items-center space-x-2">{options.map(option => <li>{option}</li>)}</div>
	</ul>
}
