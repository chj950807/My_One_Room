import { database } from "../logIn/UserData";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

export default function getCommentsData() {
  const [commentDatas, setCommentDatas] = useState<any>([
    { comment: "", displayName: "", roomID:"", id: ""},
  ]);

  useEffect(
    () =>
      onSnapshot(collection(database, "comments"), (snapshot) =>
        setCommentDatas(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );
  return commentDatas;
}
