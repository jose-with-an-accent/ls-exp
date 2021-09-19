import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import ProfileView from './Components/ProfileView';
import { Provider } from 'react-redux';
import Store from './API/Store';
import ConversationView from './Pages/ConversationView';
import SignInView from './Pages/SignInView';
import WSConnection from './Components/WSConnection';
import Dialog from './Components/Dialog';
import Toast from './Components/Toast';
import Settings from './API/Settings';
import ListItem from './Components/ListItem';
import Input from './Components/Input';
import User from './API/User';
import SettingsDialog from './Components/Dialogs/SettingsDialog';
import SocialDialog from './Components/Dialogs/SocialDialog';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
	const signedIn = true;
	const addFriendOpen = false;
	const settingsOpen = false;
	console.log(User)
	let savefile = User.savefiles[User.currentSavefile]
	return (
		<Provider store={Store}>
			<BrowserRouter>
				<>
					<Nav signedIn={signedIn} />
					<ProfileView name={savefile.name} age={savefile.age} experience={savefile.experience} intelligence={savefile.intelligence} reputation={savefile.reputation} />
					<Route component={HomePage} exact path="/" />
					{addFriendOpen && <SocialDialog isClosable />}
					{settingsOpen && <SettingsDialog isClosable />}
					<WSConnection />

				</>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
