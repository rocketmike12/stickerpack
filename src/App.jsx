import { Component } from "react";

import { Choice } from "./components/Choice/Choice";
import { StickerList } from "./components/StickerList/StickerList";

import "./sass/base/base.scss";

class App extends Component {
	state = {
		selected: "none"
	};

	setSelected = (sticker) => {
		this.setState({
			selected: sticker
		});
	}

	render() {
		return (
			<>
				<Choice selected={this.state.selected} />
				<StickerList setSelected={this.setSelected} />
			</>
		);
	}
}

export default App;
