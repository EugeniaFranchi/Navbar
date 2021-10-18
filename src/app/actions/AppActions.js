export const INCREASEBYONE = "INCREASEBYONE";
export const ZERO = "ZERO";
export const DECREASEBYONE = "DECREASEBYONE";

export const increaseByOne = () => ({
  type: INCREASEBYONE
});

export const setToZero = () => ({
  type: ZERO
});

export const decreaseByOne = (payload) => ({
  type: DECREASEBYONE
});
