const BUY_CAKE = "BUY_CAKE";

const buySweet = () => {
  return {
    type: BUY_CAKE,
    info: "will take sweets",
  };
};

const initialState = {
  noOfSweets: 100,
};

const reducerSweets = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return { noOfSweets: state.noOfSweets - 1 };
  }
};
