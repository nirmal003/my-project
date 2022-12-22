const redux = require("redux");
const { default: logger } = require("redux-logger");
const { default: thunk } = require("redux-thunk");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applymiddleware = redux.applyMiddleware;

const BUY_SWEET = "Buy_Sweet";
const BUY_CAKE = "Buy_Cake";
const BUY_EGG = "Buy_Egg";
const BUY_COFFEE = "Buy_Coffee";

//  Action section which used to pass the action to reducer(Customer)

const buySweet = (count = 1) => {
  console.log("hello");

  return {
    type: BUY_SWEET,
    info: count,
  };
};

const buyCake = (count = 1) => {
  return {
    type: BUY_CAKE,
    info: count,
  };
};

const buyEgg = (count = 1) => {
  return {
    type: BUY_EGG,
    info: count,
  };
};

const buyCoffee = (count = 1) => {
  return {
    type: BUY_COFFEE,
    info: count,
  };
};

//  Store section which follows the reducer action(Shop)

const initialSweet = {
  noOfSweets: 100,
};

const initialCake = {
  noOfCakes: 100,
};

const initialEgg = {
  noOfEggs: 100,
};

const initialCoffee = {
  noOfCoffees: 100,
};

//  Reducer section which used to manage the action(Shopkeeper)

const reduceSweet = (state = initialSweet, action) => {
  console.log("hi");

  switch (action.type) {
    case BUY_SWEET:
      return {
        ...state,
        noOfSweets: state.noOfSweets - action.info,
      };
    default:
      return state;
  }
};

const reduceCake = (state = initialCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.info,
      };
    default:
      return state;
  }
};

const reduceEgg = (state = initialEgg, action) => {
  switch (action.type) {
    case BUY_EGG:
      return {
        ...state,
        noOfEggs: state.noOfEggs - action.info,
      };
    default:
      return state;
  }
};

const reduceCoffee = (state = initialCoffee, action) => {
  switch (action.type) {
    case BUY_COFFEE:
      return {
        ...state,
        noOfCoffees: state.noOfCoffees - action.info,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  Sweet: reduceSweet,
  Cake: reduceCake,
  Egg: reduceEgg,
  Coffee: reduceCoffee,
});

const store = createStore(rootReducer, applymiddleware(thunk, logger));

console.log("Initial State", store.getState());

const unSubscribe = store.subscribe(
  () => {}
  // console.log("Updated State", store.getState())
);

store.dispatch(buySweet(5));
store.dispatch(buyCake(4));
store.dispatch(buyEgg(3));
store.dispatch(buyCoffee(2));

unSubscribe();
