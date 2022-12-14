const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_SWEET = "Buy_Sweet";
const BUY_CAKE = "Buy_Cake";
const BUY_EGG = "Buy_Egg";
const BUY_COFFEE = "Buy_Coffee";

const buySweet = () => {
  return {
    type: BUY_SWEET,
    info: "will take Sweets",
  };
};

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "will take Cakes",
  };
};

const buyEgg = () => {
  return {
    type: BUY_EGG,
    info: "will take Eggs",
  };
};

const buyCoffee = () => {
  return {
    type: BUY_COFFEE,
    info: "will take Coffes",
  };
};

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

const reduceSweet = (state = initialSweet, action) => {
  switch (action.type) {
    case BUY_SWEET:
      return {
        ...state,
        noOfSweets: state.noOfSweets - 5,
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
        noOfCakes: state.noOfCakes - 4,
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
        noOfEggs: state.noOfEggs - 3,
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
        noOfCoffees: state.noOfCoffees - 2,
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

const store = createStore(rootReducer);

console.log("Initial State", store.getState());

const unSubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(buySweet());
store.dispatch(buyCake());
store.dispatch(buyEgg());
store.dispatch(buyCoffee());

unSubscribe();
