import { database } from "../logIn/UserData";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

export default function EvaluationRating() {
  const [evaluationdatas, setEvaluationDatas] = useState<any>([
    { displayName: "", address: "", score: "", date: "", id: "initial" },
  ]);

   useEffect(
     () =>
       onSnapshot(collection(database, "evaluations"), (snapshot) =>
         setEvaluationDatas(
           snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
         )
       ),
     []
   );
  return evaluationdatas;
}
