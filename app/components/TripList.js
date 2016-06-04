import React from 'react';
import { tripDisplay, likes, tripBar } from '../stylesheets/style';

class TripList extends React.Component {

  constructor(props) {
    super(props);    
  }

  render () {
  	return (
      <div className="trip-list" style={tripDisplay}>
    		<div className="likes" style={likes} onClick={this.props.clickfxn}>
    			+{this.props.trip.likes}
    		</div>
    		<button 
      		className='btn btn-primary' 
      		type="button" 
      		data-toggle="dropdown" 
      		style={tripBar}>
      		{this.props.trip.title} 
      		<span className="carat">
      		</span>
      	</button>
        <a href="#" className="btn btn-default" onClick={this.props.clickfxn.bind(null, this.props.trip, this.props.index, 1)}><span className="glyphicon glyphicon-arrow-up"></span></a>
        <a href="#" className="btn btn-default" onClick={this.props.clickfxn.bind(null, this.props.trip, this.props.index, 2)}><span className="glyphicon glyphicon-arrow-down"></span></a>
    	</div>
    )
  };
};


export default TripList;