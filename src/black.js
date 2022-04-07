import React from "react";

class Black extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isOn: false};
	}
	
	handleToggle(e) {
		this.setState({isOn: !this.state.isOn});
	}
	
	render() {
		let classNames = ["component-wrapper", (this.state.isOn) ? "component-wrapper_is-light" : "component-wrapper_is-dark"].join(" ");
		return (
			<div className={classNames}>
				<Header 
					isOn={this.state.isOn}	
				/>
			</div>		
		);
	}
}

const Header = function(props) {
	let classNames = ["header", (props.isOn) ? "header_is-lit" : "header_is-dark"].join(" ");
	return (
		<div>
			<h1 className={classNames}>Statistics</h1>
            <p className="j">
                Oru power pack lokathil vannit ithrem nerayi <br/>
                11,571,840 minutes <br/>
                192,864 hours <br/>
                8036 days <br/>
                1148 weeks <br/>
            </p>
		</div>
	);
}

const Switch = function(props) {
	let classNames = ["switch", (props.isOn) ? "switch_is-on" : "switch_is-off"].join(" ");
	return (
		<div className={classNames} onClick={props.handleToggle}>
			<ToggleButton 
				isOn={props.isOn}	
			/>
		</div>
	);
}

const ToggleButton = function(props) {
		let classNames = ["toggle-button", (props.isOn) ? "toggle-button_position-right" : "toggle-button_position-left"].join(" ");
		return (<div className={classNames}></div>);
};

export default Black;