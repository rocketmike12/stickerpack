import PropTypes from "prop-types";

import { FriendListItem } from "./FriendListItem";

import styles from "./FriendList.module.scss";

const FriendList = function (props) {
	return (
		<>
			<ul className={styles["friend-list"]}>
				{props.friends.map((friend, id) => (
					<FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={id} />
				))}
			</ul>
		</>
	);
};

FriendList.propTypes = {
	friends: PropTypes.object.isRequired
};

export { FriendList };
