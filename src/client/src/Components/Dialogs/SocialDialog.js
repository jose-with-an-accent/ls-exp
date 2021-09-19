import useAxios from "axios-hooks"
import User from "../../API/User"
import Dialog from "../Dialog"
import Input from "../Input"
import ListItem from "../ListItem"

export default () => {
	const [{frData, frLoading, frError}, frRefetch] = useAxios('https://6e3f5360-8cec-41df-9de6-86cc3aaa81c4.mock.pstmn.io/api/sendFriendRequest', {manual: true});
	const [{friends, friendsLoading, friendError}, refetch] = useAxios('https://6e3f5360-8cec-41df-9de6-86cc3aaa81c4.mock.pstmn.io/api/friendRequests');

	function sendFriendRequest() {
		refetch();
	}
	return <Dialog title="Social" width="3/12">
		<h4 className="font-bold text-lg">Your Friends</h4>
		{friendsLoading && friends.map(friend => {
			return <ListItem image={"https://assassa.com/assa"} name={friend.name} options={[friend.status, "Unfriend"]} />
		})}
		<ListItem name="+ Add More" options={[""]}/>
		<h4 className="font-bold text-lg">Add A Friend</h4>
		<p>To add a friend, enter their email address or username here.</p>
		<Input type="email" className="w-full" placeholder="harrypotter@hogwarts.edu"/>
		<Input type="submit" value="Check" onClick={sendFriendRequest} />
	</Dialog>
}
