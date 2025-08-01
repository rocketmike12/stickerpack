import PropTypes from "prop-types";

import styles from "./TransactionHistory.module.scss";

const TransactionHistory = function (props) {
	return (
		<>
			<table className={styles["transaction-history"]}>
				<thead>
					<tr>
						<th>Type</th>
						<th>Amount</th>
						<th>Currency</th>
					</tr>
				</thead>

				<tbody>
					{props.items.map((item, id) => (
						<tr key={id}>
							<td>{item.type}</td>
							<td>{item.amount}</td>
							<td>{item.currency}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

TransactionHistory.propTypes = {
	items: PropTypes.object.isRequired
};

export { TransactionHistory };
