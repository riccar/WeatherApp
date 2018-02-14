//search_bar component is a container since it changes the app state with every search
//hence it needs to interact with redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  //Initialize search term as empty within the constructor
  constructor(props) {
    super(props);

    this.state = {term: ''};

    //Binding the onInputChange function context to this component, so when
    //it's called from the input onChange attribute, its content is the same as 
    //THIS component
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //Every event comes with the event object since vanilla JS
  //event.target.value always has the value written in the input when it changes.
  onInputChange(event) {
    //console.log(event.target.value);
    //Change the component state so the input can show the value as the user types
    this.setState({ term: event.target.value });
  }

  // When pressing enter on the input or click on submit button, the browser
  // automatically thinks the user is trying to submit the form, hence he
  // makes a post request and the server shows back the localhost:8080 and
  // the page is reloaded. This is not a react but a borwser behaviour
  // in order to prevent this, a submit handle event needs to be written (onSubmit).

  onFormSubmit(event) {
    event.preventDefault();

    // Fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forcast for your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function matchDispatchToProps(dispatch) {
  //Passed the result to all of the reducers
  return bindActionCreators({ fetchWeather }, dispatch);
}
//By passing null instead of mapStateToProps we tell redux that we don't care about the state for this component
export default connect(null, matchDispatchToProps)(SearchBar);
