export const INSERT = "INSERT";

/**
 * [0,0,0,0, 0,0,0,0]
 * @param {*} state
 * @param {*} action
 * @returns
 */

export const initialState = {
  vals: [3, 4, 2, 4, 1, 3, 2, 1],
};

export function reducer(state, action) {
  switch (action.type) {
    case INSERT: {
      const { pos, num, pos2, num2 } = action.payload;
      let nVals = state.vals;
      nVals[pos] = num;
      nVals[pos2] = num2;
      return { ...state, vals: [...nVals] };
    }
    default:
      return { ...state };
  }
}
