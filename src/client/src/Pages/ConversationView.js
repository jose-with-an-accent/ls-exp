import Message from "../Components/Message"

export default () => {
	return <main className="h-full w-10/12">
		<div id="situationalArt" className=" items-center justify-center bg-gray-800 h-96">
			<h1 className=" text-gray-400">situational art</h1>
		</div>
		<div className="flex justify-end">
			<Message content="While walking to school, a thief comes over. He wants to steal all your money." date="August 28"/>
		</div>
	</main>
}
