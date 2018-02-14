import { FETCH_WEATHER } from "../actions/index";

//Reducer for the weather data
//State is an array of cities.
export default function(state = [], action) {
  //console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
      //return a new state based on the current state
      //concatenating the new city. Never manipulate the state here like using state.push()
      //Instead, create a new array and concatenate the new data
      return state.concat([action.payload.data]);
      //Equivalent to type the following, only that it insert the new data at the top
      //return [ action.payload.data, ...state ];
  }

  return state;
 
}