import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import {
  collection,
  query,
  DocumentData,
  where,
  getDocs,
} from "@firebase/firestore";

import { db } from "@/firebase/firebase-config";
import { userProperties } from "@/constants/firestoreUserProperties";

const useLoggedInUser = () => {
  const { WALLET_ADDRESS } = userProperties;
  const usersRef = collection(db, "users");
  const { isAuthenticated, user: moralisUser } = useMoralis();
  const [loggedInUser, setLoggedInUser] = useState<DocumentData | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      const getLoggedInUser = async () => {
        const userQuery = await query(
          usersRef,
          where(WALLET_ADDRESS, "==", moralisUser?.attributes?.ethAddress)
        );

        const userData = await getDocs(userQuery);
        setLoggedInUser(userData.docs.map((user) => user.data())[0]);
      };

      getLoggedInUser();
    }
  }, [isAuthenticated]);

  return { loggedInUser };
};

export default useLoggedInUser;
