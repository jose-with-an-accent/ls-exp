import { useState } from "react"
import Input from "./Input"

export default () => {
	const [isSignInSelected, setIsSignInSelected] = useState(true);
	function toggleSignIn(e) {
		e.preventDefault();
		setIsSignInSelected(!setIsSignInSelected);
	}
	function signIn() {

	}
	return (
		<div className="absolute top-12 right-5 bg-white w-2/12 text-black rounded p-3 shadow">
			<form className="space-y-3">
				{isSignInSelected ? <>
					<h1 className="font-bold text-lg">Log in to lifesim</h1>
					<Input className="w-full" type="email" placeholder="email" />
					<Input className="w-full" type="password" placeholder="password" />
					<div>
						<Input type="submit" value="Sign In" className="bg-blue-600 text-white border-blue-400" onClick={signIn} />
						<span className="px-2">or</span>
						<a href="/signUp" onClick={toggleSignIn} className="text-blue-600">Sign Up</a></div>
				</> : <>
					<h1 className="font-bold text-lg">Sign Up to lifesim</h1>
					<Input className="w-full" type="email" placeholder="email" />
					<Input className="w-full" type="password" placeholder="password" />
					<div>
						<Input type="submit" value="Sign Up" className="bg-blue-600 text-white border-blue-400" onClick={signIn} />
						<span className="px-2">or</span>
						<a href="/signUp" onClick={toggleSignIn} className="text-blue-600">Log In</a></div>
				</>}
			</form>
		</div>
	)
}
