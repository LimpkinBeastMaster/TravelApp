//THE MAIN PAGE AT FOR / INDEX

import React from 'react'
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions'
import NavLink from './NavLink'
import Globe from './Globe'

import { Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import { home } from '../stylesheets/style'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    console.log('AT HOME');
    HomeStore.listen(this.onChange);
    //HomeActions.getChallenges();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(character) {
   
  }

  render() {
    return (
      <div className="home" style={home}>
        <Jumbotron>
          <h1>TravelApp</h1>
        </Jumbotron>

      </div>
    );
  }
}

export default Home;