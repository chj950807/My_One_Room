export const initialState = {
  evaluates:[0,0,0,0,0,0,0,0,0,0,0,0],
  evaluate13: "",
  address:"",
};

const EVALUATES = "EVALUATES";
const EVALUATE_13 = "EVALUATE_13";
const REAL_ADDRESS = "REAL_ADDRESS"


export const evaluates = ({ evaluates }: { evaluates: number[] }) => ({
  type: EVALUATES,
  payload:{evaluates},
})
export const evaluating13 = ({ evaluate13 }: { evaluate13: string }) => ({
  type: EVALUATE_13,
  payload: { evaluate13 },
});
export const realaddress = ({ address }: { address: string }) => ({
  type: REAL_ADDRESS,
  payload: { address },
});

export default function evaluate(state = initialState, action: any) {
  switch (action.type) {
    case EVALUATES:
      return {
        ...state,
        evaluates: action.payload.evaluates,
      };
    case EVALUATE_13:
      return {
        ...state,
        evaluate13: action.payload.evaluate13,
      };
    case REAL_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
      };
    default:
      return state;
  }
}
