import React from 'react';
import TripList from './TripList';
import UserTripsStore from '../stores/UserTripStore'


var search = {
	height: "200px",
	width: "1000px",
	marginLeft: "auto",
	marginRight: "auto"
}

var trips = {
	width: "1000px",
	clear: "both",
	marginLeft: "auto",
	marginRight: "auto"
}

class UserTripsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = UserTripsStore.getState();
  }
  render() {
    return (
    	<div className='all-trips-view' style={search}>
    		<div className="trips" style={trips}>
        { this.state.trips.map((trip, indx) =>
    			<TripList key={indx} trip={trip}/>
          )
        }
    		</div>
      </div>
    );
  }
}

export default UserTripsView;