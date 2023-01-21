import { database } from "../logIn/UserData";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
export const sendEvaluateData = (
  evaluates: number[],
  evaluate13: string,
  address: string,
  displayName: string,
  date:Date,
) => {
 handleNew(evaluates,
  evaluate13,
  address,
     displayName,
     date)

};

const Evaluate_average = (evaluates: number[]) => {
  let total_score = 0;
  evaluates.forEach(function (item: number) {
    total_score += item;
  });
  let average_score = (total_score / evaluates.length).toFixed(2);
  return average_score;
};

const handleNew = async (
  evaluates: number[],
  evaluate13: string,
  address: string,
    displayName: string,
  date:Date
) => {
  const evaluate1 = evaluates[0];
  const evaluate2 = evaluates[1];
  const evaluate3 = evaluates[2];
  const evaluate4 = evaluates[3];
  const evaluate5 = evaluates[4];
  const evaluate6 = evaluates[5];
  const evaluate7 = evaluates[6];
  const evaluate8 = evaluates[7];
  const evaluate9 = evaluates[8];
  const evaluate10 = evaluates[9];
  const evaluate11 = evaluates[10];
    const evaluate12 = evaluates[11];
    const score = Evaluate_average(evaluates);
    const collectionRef = collection(database, "evaluations");
    const payload = {evaluate1,evaluate2,evaluate3,evaluate4,evaluate5,evaluate6,evaluate7,evaluate8,evaluate9,evaluate10,evaluate11,evaluate12,evaluate13,score,address,displayName,date};
    const docRef = await addDoc(collectionRef, payload);
};