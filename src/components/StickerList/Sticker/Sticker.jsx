import React, { Component } from "react";

import { StickerItem } from "./StickerItem";

export class Sticker extends Component {
	render() {
		return (
			<>
				<StickerItem
					onClick={() => {
						this.props.setSelected(this.props.label);
					}}
				>
					<img src={this.props.img} alt={this.props.label} />
				</StickerItem>
			</>
		);
	}
}
