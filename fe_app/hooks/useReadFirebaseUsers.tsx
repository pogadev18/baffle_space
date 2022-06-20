import { useEffect, useState } from "react";
import { collection, DocumentData } from "@firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import { db } from "@/firebase/firebase-config";

const useReadFirebaseUsers = () => {
  const usersCollectionRef = collection(db, "users");
  const [users, usersLoading, usersError] = useCollection(
    usersCollectionRef,
    {}
  );
  const [firebaseUsers, setFirebaseUsers] = useState<DocumentData[]>();

  useEffect(() => {
    if (!usersLoading && users) {
      setFirebaseUsers(users.docs.map((doc) => doc.data()));
    }
  }, [usersLoading]);

  console.log("userss from hook", firebaseUsers);

  return { firebaseUsers, usersCollectionRef };
};

export default useReadFirebaseUsers;
