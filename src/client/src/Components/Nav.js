import { useState } from "react"
import { Link } from "react-router-dom";
import LoginBox from "./LoginBox"

export default ({ signedIn }) => {
	function toggleLoginDialogShown(e) {
		e.preventDefault();
		setisLoginDialogShown(!isLoginDialogShown);
	}
	function togglePreferencesDialogShown(e) {
		e.preventDefault();
		setisPreferencesDialogShown(!isPreferencesDialogShown);
	}

	const [isLoginDialogShown, setisLoginDialogShown] = useState(false)
	const [isPreferencesDialogShown, setisPreferencesDialogShown] = useState(false)
	return (
		<nav className="bg-blue-600 items-center font-mono flex flex-row justify-between text-white p-3">
			<ul className="flex items-center space-x-3">
				<li><Link to="/"><h1 className="text-3xl">lifesim</h1></Link></li>
				<li><Link to="/">Play</Link></li>
				<li><Link to="/leaderboard">Leaderboard</Link></li>
			</ul>
			<ul className="flex items-center space-x-3">
				{signedIn ? <li><a href="#" onClick={togglePreferencesDialogShown}>Preferences</a>
				{isPreferencesDialogShown && <div className="absolute top-30 right-5 rounded text-blue-600 p-3 bg-white space-y-2">
					<li>Sign Out</li>
					<li>Add Friends</li>
					<li>Settings</li>
					</div>}
				</li> : <li><a href="/signIn" onClick={toggleLoginDialogShown}>Sign In</a> {isLoginDialogShown && <LoginBox />}</li>}
			</ul>
		</nav>

	)
}
