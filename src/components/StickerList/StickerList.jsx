import React, { Component } from "react";

import { StyledList } from "./StyledList";

import { Sticker } from "./Sticker/Sticker";

import stickers from "../../data/stickers.json";

export class StickerList extends Component {
	render() {
		return (
			<>
				<StyledList onClick={this.handleClick}>
					{stickers.map((sticker, id) => (
						<Sticker img={sticker.img} label={sticker.label} key={id} setSelected={this.props.setSelected} />
					))}
				</StyledList>
			</>
		);
	}
}
