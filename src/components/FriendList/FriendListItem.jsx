import PropTypes from "prop-types";

import styles from "./FriendList.module.scss";

const FriendListItem = function (props) {
	return (
		<>
			<li className={styles["friend-list__item"]}>
				<span className={styles["friend-list__status"]} style={{backgroundColor: props.isOnline ? "#a6e3a1" : "#f38ba8"}}></span>
				<img className={styles["friend-list__avatar"]} src={props.avatar} alt="User avatar" width="48" />
				<p className={styles["friend-list__name"]}>{props.name}</p>
			</li>
		</>
	);
};

FriendListItem.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired
};

export { FriendListItem };
