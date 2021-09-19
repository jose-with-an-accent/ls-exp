import Settings from "../../API/Settings"
import Dialog from "../Dialog"
import ListItem from "../ListItem"

export default () => {
	return <Dialog isClosable title="Settings" width="7/12">
		{Settings.map(val => <ListItem options={val.options} name={val.name} />)}
	</Dialog>
}
