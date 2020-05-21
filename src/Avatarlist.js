import React, {Component} from 'react';

class Avatarlist extends Component {
	render() {

		console.log(this.props);

		return (
		    <div className="avatarstyle ma4 bg-light-purple dib pa3 grow shadow-4 tc" onClick={this.props.onClick}>
			 	<img src={this.props.image} alt="Avatar"/>
				<h1 className=""> {this.props.name} </h1>
			</div>
		)

	}
}

export default Avatarlist;