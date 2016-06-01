import React from 'react';
import { Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { home } from '../stylesheets/style';

class Home extends React.Component {
	constructor() {
		super();
		this.state = { 
			value: ''
		};
	}
	handleChange(e) {
		this.setState({ value: e.target.value})
	}
  render() {
    return (
    	<div className="home" style={home}>
	    	<Jumbotron>
	      <h1>TravelApp</h1>
	      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem nunc, scelerisque nec quam quis, fermentum suscipit orci.</p> 
	      </Jumbotron>
	      <form>
	      	<FormGroup 
	      	  controlId ="formBasicText">
	      		<ControlLabel>Username</ControlLabel>
	      		<FormControl
	      			type="text"
	      			value={this.state.value}
	      			placeholder="Enter Username"
	      			onChange={this.handleChange} />
	      		  <FormControl.Feedback />
	      		  <HelpBlock>Usually your email address.</HelpBlock>	      		
	      	</FormGroup>
	      </form>
      </div>
    );
  }
}

export default Home;