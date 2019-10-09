//Let's get compose out of the way first, it's just a helper
//compose takes one or more functions and it returns a new function
//that takes the value and shot up thru all of that function

//Redux function
const {
	createStore,
	combineReducers,
	compose,
	bindActionCreators,
	applyMiddleware
} = Redux;



const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

const makeLouderAndBoldAndRepeatThreeTimes = compose(embolden, repeatThreeTimes, makeLouder);

makeLouderAndBoldAndRepeatThreeTimes('hello');

const reducer = (state = {value:1}, action)=> {
	return state
}

const store = createStore(reducer);
//in console if u log Object.keys(store) if have ['dispatch','subscribe','getState','replaceReducer']