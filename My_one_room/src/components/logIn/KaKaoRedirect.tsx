import React,{useEffect} from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
interface Auth {
  firebaseToken: string;
}

export default async function KaKaoRedirect() {
  let params = new URL(document.location.toString()).searchParams;
  let code = params.get("code");
  let grant_type = "authorization_code";
  let client_id = "b719ebe14a073c660f425715b992a64f";

  if (!code) {
    return <Navigate to="/login" />
  }
  const res = await axios.post(
    `https://kauth.kakao.com/oauth/token
        grant_type=${grant_type}
        &client_id=${client_id}
        &redirect_uri=http://localhost:5173/oauth
        &code=${code}`
  ); 

  console.log(res);
  console.log(res.data);
  console.log(res.config);
  console.log(res.status);
  console.log(res.request);


}
