// SECTION 11: Part 80

// reducers are functions that produces some amount of state
// reducers are always called with two arguments:
// 1st: current state is has producer
// 2nd: action
const reducer = (state = [], action) => {
	if (action.type === 'split_string') {
  	return action.payload.split('');
  } else if (action.type === 'add_character') {
    // take a new array, and add action.payload
    // ALWAYS return brand new objects to new reducers - don't mutate state!
    // you can't just call state.push(action.payload); (this mutates state!)
    return [ ...state, action.payload ];
  }

  return state;
};
// when you create a store RN expects you to pass a reducer function
const store = Redux.createStore(reducer);

// this callback gets current state
store.getState();

// action is a plain JS object
// type property needs to be defined - always a string
// payload is data we want to work with / manipulate
const action = { type: 'split_string',
               	 payload: 'asdf'
               };
// take action and push into reducer:
store.dispatch(action);

//when you run getState(); method again, you get new State
store.getState();

// please add another character to my state array, and that character is 'a'
const action2 = {
	type: 'add_character',
  payload: 'a'
};
// you have to dispatch action which sends it to reducer which will immediately re-run
store.dispatch(action2);

//we can retrieve this new action's state by calling:
store.getState();



// what's the point of not just splitting string? : Redux is one of the best libraries for scaling an app to be very large with the least amount of code complexity - As your app starts to grow and build out more features, it will help you write code in a fashion where your code doesn't have to grow in complexity
// bc of the action system - whole process of dispatching an action to a reducer


// SECTION 11: Part 81: review of above code:
