import { database } from "../logIn/UserData";
import { useEffect } from "react";
import {
  collection,
  getDocs,
  QuerySnapshot,
  Timestamp,
  updateDoc,
  getDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

export default async function EvaluationRating() {
  useEffect(() => {
    onSnapshot(collection(database, "evaluations"), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
    });
  });
}
