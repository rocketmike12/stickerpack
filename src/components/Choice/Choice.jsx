import React, { Component } from "react";

import { ChoiceText } from "./ChoiceText";

export class Choice extends Component {
	render() {
		return (
			<>
				<ChoiceText>selected: {this.props.selected}</ChoiceText>
			</>
		);
	}
}
