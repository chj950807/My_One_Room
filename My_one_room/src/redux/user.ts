import { auth } from "../components/logIn/UserData";

export const initialState = {
  email: "",
  displayName: "",
};

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const LoginSuccess = ({
  email,
  displayName,
}: {
  email: string | null | undefined;
  displayName: string | null | undefined;
}) => ({
  type: LOGIN_SUCCESS,
  payload: { email, displayName },
});

export const LogOutSuccess = ({
  email,
  displayName,
}: {
  email: string;
  displayName: string;
}) => ({
  type: LOGOUT_SUCCESS,
  payload: { email, displayName },
});
export default function counter(state = initialState, action: any) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        email: action.payload.email,
        displayName: action.payload.displayName,
      };
    case LOGOUT_SUCCESS:
      return {
        email: action.payload.email,
        displayName: action.payload.displayName,
      };
    default:
      return state;
  }
}
