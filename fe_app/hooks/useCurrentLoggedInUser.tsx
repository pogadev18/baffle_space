import { useEffect, useState } from "react";
import { DocumentData } from "@firebase/firestore";
import { Moralis } from "moralis";

import useReadFirebaseUsers from "./useReadFirebaseUsers";

const useCurrentLoggedInUser = (
  moralisUser: Moralis.User<Moralis.Attributes> | null,
  isAuthUndefined: boolean
) => {
  const { firebaseUsers } = useReadFirebaseUsers();

  const [loggedInUser, setLoggedInUser] = useState<DocumentData | undefined>(
    undefined
  );

  useEffect(() => {
    if (!isAuthUndefined && moralisUser && firebaseUsers) {
      const userHasEmail = firebaseUsers?.find(
        (user) => (user.wallet_address = moralisUser?.attributes.ethAddress)
      );

      console.log("user has Email", userHasEmail?.email);
      setLoggedInUser(userHasEmail);
    }
  }, [isAuthUndefined, moralisUser, firebaseUsers]);

  return { loggedInUser };
};

export default useCurrentLoggedInUser;

/*
 1. I have to find in firestore the user that is logged in
 (find the wallet_address from moralis in firestore)
 */
