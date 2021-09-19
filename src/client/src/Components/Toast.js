export default ({title, subtitle}) => {
	return <div className="fixed bottom-5 right-5 bg-white max-w-xs p-3 rounded space-y-1">
		<a className="absolute top-2 text-gray-500 text-xl right-3" href="#">&times;</a>
		<h3 className="font-bold text-lg">{title}</h3>
		<h4 className="">{subtitle}</h4>
	</div>
}
