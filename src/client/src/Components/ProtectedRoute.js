import { Redirect } from "react-router"

export default ({isAuthenticated, to}) => {
	return(
		isAuthenticated ? <Route to={to} /> : <Redirect to="/login" />
	)
}
