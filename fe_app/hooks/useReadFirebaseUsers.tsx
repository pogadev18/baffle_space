import { useEffect, useState } from "react";
import { collection, DocumentData, getDocs } from "@firebase/firestore";

import { db } from "@/firebase/firebase-config";

const useReadFirebaseUsers = () => {
  const usersCollectionRef = collection(db, "users");
  const [firebaseUsers, setFirebaseUsers] = useState<DocumentData[]>([]);

  useEffect(() => {
    const readUsers = async () => {
      const usersDoc = await getDocs(usersCollectionRef);
      const dataFromUsersDoc = await usersDoc;
      const users = dataFromUsersDoc.docs.map((data) => data.data());
      setFirebaseUsers(users);
    };

    readUsers();
  }, [usersCollectionRef]);

  return { firebaseUsers, usersCollectionRef };
};

export default useReadFirebaseUsers;
