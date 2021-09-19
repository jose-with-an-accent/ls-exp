import { useEffect } from "react";

export default () => {
	function handlePropertyChange() {
		
	}
	useEffect(() => {
		const socket = new WebSocket("ws://localhost:3001/game");
		socket.addEventListener("open", (e) => {
			console.log("Open!" + e);
		})
		socket.addEventListener("message", (e) => {
			console.log("Message! " + e.message)
		})
	}, [])

	return null;
}
