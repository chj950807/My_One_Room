export const initialState = {
  evaluate1: 0,
  evaluate2: 0,
  evaluate3: 0,
  evaluate4: 0,
  evaluate5: 0,
  evaluate6: 0,
  evaluate7: 0,
  evaluate8: 0,
  evaluate9: 0,
  evaluate10: 0,
  evaluate11: 0,
  evaluate12: 0,
  evaluate13: "",
};

const EVALUATE_1 = "EVALUATE_1";
const EVALUATE_2 = "EVALUATE_2";
const EVALUATE_3 = "EVALUATE_3";
const EVALUATE_4 = "EVALUATE_4";
const EVALUATE_5 = "EVALUATE_5";
const EVALUATE_6 = "EVALUATE_6";
const EVALUATE_7 = "EVALUATE_7";
const EVALUATE_8 = "EVALUATE_8";
const EVALUATE_9 = "EVALUATE_9";
const EVALUATE_10 = "EVALUATE_10";
const EVALUATE_11 = "EVALUATE_11";
const EVALUATE_12 = "EVALUATE_12";
const EVALUATE_13 = "EVALUATE_13";

export const evaluating1 = ({ evaluate1 }: { evaluate1: string }) => ({
  type: EVALUATE_1,
  payload: { evaluate1 },
});
export const evaluating2 = ({ evaluate2 }: { evaluate2: string }) => ({
  type: EVALUATE_2,
  payload: { evaluate2 },
});
export const evaluating3 = ({ evaluate3 }: { evaluate3: string }) => ({
  type: EVALUATE_3,
  payload: { evaluate3 },
});
export const evaluating4 = ({ evaluate4 }: { evaluate4: string }) => ({
  type: EVALUATE_4,
  payload: { evaluate4 },
});
export const evaluating5 = ({ evaluate5 }: { evaluate5: string }) => ({
  type: EVALUATE_5,
  payload: { evaluate5 },
});
export const evaluating6 = ({ evaluate6 }: { evaluate6: string }) => ({
  type: EVALUATE_6,
  payload: { evaluate6 },
});
export const evaluating7 = ({ evaluate7 }: { evaluate7: string }) => ({
  type: EVALUATE_7,
  payload: { evaluate7 },
});
export const evaluating8 = ({ evaluate8 }: { evaluate8: string }) => ({
  type: EVALUATE_8,
  payload: { evaluate8 },
});
export const evaluating9 = ({ evaluate9 }: { evaluate9: string }) => ({
  type: EVALUATE_9,
  payload: { evaluate9 },
});
export const evaluating10 = ({ evaluate10 }: { evaluate10: string }) => ({
  type: EVALUATE_10,
  payload: { evaluate10 },
});
export const evaluating11 = ({ evaluate11 }: { evaluate11: string }) => ({
  type: EVALUATE_11,
  payload: { evaluate11 },
});
export const evaluating12 = ({ evaluate12 }: { evaluate12: string }) => ({
  type: EVALUATE_12,
  payload: { evaluate12 },
});
export const evaluating13 = ({ evaluate13 }: { evaluate13: string }) => ({
  type: EVALUATE_13,
  payload: { evaluate13 },
});

export default function evaluate(state = initialState, action: any) {
  switch (action.type) {
    case EVALUATE_1:
      return {
        ...state,
        evaluate1: action.payload.evaluate1,
      };
    case EVALUATE_2:
      return {
        ...state,
        evaluate2: action.payload.evaluate2,
      };
    case EVALUATE_3:
      return {
        ...state,
        evaluate3: action.payload.evaluate3,
      };
    case EVALUATE_4:
      return {
        ...state,
        evaluate4: action.payload.evaluate4,
      };
    case EVALUATE_5:
      return {
        ...state,
        evaluate5: action.payload.evaluate5,
      };
    case EVALUATE_6:
      return {
        ...state,
        evaluate6: action.payload.evaluate6,
      };
    case EVALUATE_7:
      return {
        ...state,
        evaluate7: action.payload.evaluate7,
      };
    case EVALUATE_8:
      return {
        ...state,
        evaluate8: action.payload.evaluate8,
      };
    case EVALUATE_9:
      return {
        ...state,
        evaluate9: action.payload.evaluate9,
      };
    case EVALUATE_10:
      return {
        ...state,
        evaluate10: action.payload.evaluate10,
      };
    case EVALUATE_11:
      return {
        ...state,
        evaluate11: action.payload.evaluate11,
      };
    case EVALUATE_12:
      return {
        ...state,
        evaluate12: action.payload.evaluate12,
      };
    case EVALUATE_13:
      return {
        ...state,
        evaluate13: action.payload.evaluate13,
      };
    default:
      return state;
  }
}
