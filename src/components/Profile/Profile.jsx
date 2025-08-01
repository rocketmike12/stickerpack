import PropTypes from "prop-types";

import styles from "./Profile.module.scss";

const Profile = function (props) {
	return (
		<>
			<div className={styles["profile"]}>
				<div className={styles["profile__description"]}>
					<img src={props.avatar} alt="User avatar" className={styles["profile__avatar"]} />
					<p className={styles["profile__name"]}>{props.username}</p>
					<p className={styles["profile__tag"]}>{props.tag}</p>
					<p className={styles["profile__location"]}>{props.location}</p>
				</div>

				<ul className={styles["profile__stats"]}>
					<li className={styles["profile__stats__item"]}>
						<span className={styles["profile__stats__label"]}>Followers</span>
						<span className={styles["profile__stats__quantity"]}>{props.stats.followers}</span>
					</li>
					<li className={styles["profile__stats__item"]}>
						<span className={styles["profile__stats__label"]}>Views</span>
						<span className={styles["profile__stats__quantity"]}>{props.stats.views}</span>
					</li>
					<li className={styles["profile__stats__item"]}>
						<span className={styles["profile__stats__label"]}>Likes</span>
						<span className={styles["profile__stats__quantity"]}>{props.stats.likes}</span>
					</li>
				</ul>
			</div>
		</>
	);
};

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired
};

export { Profile };
