import ConversationView from "./ConversationView";
import SignInView from "./SignInView";

export default () => {
	const signedIn = true;
	return (
		<div className="App bg-gray-900 font-mono">
			{signedIn ? <>
				<div className="flex flex-row">AAAAA
					<ConversationView />
				</div>
			</> : <SignInView />}
		</div>)
}
