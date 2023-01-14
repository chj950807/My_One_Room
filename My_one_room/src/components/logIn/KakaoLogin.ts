const CLIENT_ID = "b719ebe14a073c660f425715b992a64f";
const REDIRECT_URI = "http://localhost:5173/oauth";

export const KAKAO_AUTH_URI =`https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;