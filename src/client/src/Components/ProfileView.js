import ActionPane from "./ActionPane"
import Slider from "./Slider"

export default ({ name, age, intelligence, experience, reputation }) => {
	return <aside className="h-screen min-w-2/12 space-y-2 bg-gray-800 p-3">
		<div id="basic-info" className="flex flex-row p-3">

			<img src="#" className="bg-gray-400 rounded-full overflow-hidden mr-3" width="70" height="70" />
			<div className="text-white">
				<span className="block font-bold">{name}</span>
				<span className="block">Age {age}</span>
			</div>
		</div>
		<Slider />
		<ActionPane />			
	</aside>
}
