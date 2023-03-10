export const initialState = {
  evaluates: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  evaluate13: "",
  address: "",
  detailaddress:"",
};

const POST = "POST";
const EVALUATES = "EVALUATES";
const EVALUATE_13 = "EVALUATE_13";
const ADDRESS ="ADDRESS"
const DETAIL_ADDRESS = "DETAIL_ADDRESS";

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
export const detailaddress = ({ detailaddress }: { detailaddress: string }) => ({
  type: DETAIL_ADDRESS,
  payload: { detailaddress },
});
export const redux_address = ({ address }: { address: string }) => ({
  type: ADDRESS,
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
    case ADDRESS:
      return {
        ...state,
        address: action.payload.address,
      };
    case DETAIL_ADDRESS:
      return {
        ...state,
        detailaddress: action.payload.detailaddress,
      };
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
