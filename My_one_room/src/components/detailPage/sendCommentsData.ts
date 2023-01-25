import { database } from "../logIn/UserData";
import { collection, addDoc } from "firebase/firestore";
export const sendCommentsData = (
  comment: string,
  displayName: string,
  roomID: string
) => {
  handleNew(comment, displayName, roomID);
};

const handleNew = async (
  comment: string,
  displayName: string,
  roomID: string
) => {
  const collectionRef = collection(database, "comments");
  const payload = {
    comment,
    displayName,
    roomID,
  };
  const docRef = await addDoc(collectionRef, payload);
};
