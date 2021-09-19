export default ({date, content}) => {
	return <div className="px-5 pt-4 flex text-sm">
		<div className="flex flex-row">
			<span className="text-green-500 pr-2">{date}</span>
			<div className="bg-gray-300 w-80 text-sm p-3 rounded-lg">{content}</div>
		</div>
		<span className="text-green-500">What do you do?</span>
	</div>
}
