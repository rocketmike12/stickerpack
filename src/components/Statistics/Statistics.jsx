import { useEffect, useRef, React } from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.scss";

function getRandomHexColor() {
	return (
		"#" +
		Math.floor(Math.min(Math.random() * 0xffffff + 0x444444, 0xeeeeee))
			.toString(16)
			.padStart(6, "0")
	);
}

const Statistics = function (props) {
	useEffect(() => {
		document.getElementById("statList").childNodes.forEach((el) => {
			el.style.backgroundColor = getRandomHexColor();
		});
	}, []);

	return (
		<>
			<section className={styles["statistics"]}>
				{props.title ? <h2 className={styles["statistics__title"]}>{props["title"]}</h2> : <></>}
				<ul className={styles["stat-list"]} id="statList">
					{props["stats"].map((stat, id) => (
						<li className={styles["stat-list__item"]} key={id}>
							<span className={styles["stat-list__label"]}>{stat.label}</span>
							<span className={styles["stat-list__percentage"]}>{stat.percentage + "%"}</span>
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.object.isRequired
};

export { Statistics };
