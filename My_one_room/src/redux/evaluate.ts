export const initialState = {
  evaluates: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  evaluate13: "",
  address: "",
};

const POST = "POST";
const EVALUATES = "EVALUATES";
const EVALUATE_13 = "EVALUATE_13";
const REAL_ADDRESS = "REAL_ADDRESS";

//1번 초기화 방법
// export const post = () => ({
//   type: POST,
// });

//2번 초기화 방법
export const post = ({
  evaluates,
  evaluate13,
  address,
}: {
  evaluates: number[],
  evaluate13: string,
  address: string,
}) => {
  return {
    type: POST,
    payload: {evaluates, evaluate13,address}
  };
};

export const evaluates = ({ evaluates }: { evaluates: number[] }) => ({
  type: EVALUATES,
  payload: { evaluates },
});
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
    //1번 초기화 방법
    // case POST:
    //   return {
    //     ...state,
    //     evaluates:initialState.evaluates,
    //     evaluate13:initialState.evaluate13,
    //     address:initialState.address,
    //   }
    
    //2번 초기화 방법
    case POST:
      return {
        ...state,
        evaluates: action.payload.evaluates,
        evaluate13: action.payload.evaluate13,
        address: action.payload.address,
      };

    default:
      return state;
  }
}
