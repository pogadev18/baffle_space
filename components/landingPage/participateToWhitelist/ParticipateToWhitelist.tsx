import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { doc, setDoc } from '@firebase/firestore';

import useLoggedInUser from '@/hooks/useLoggedInUser';
import { db } from '@/firebase/clientApp';

import AlertComponent from '@/components/alert';

import { AlertStatusValues } from '@/utils/interfaces/alertStatuses';

const { Success } = AlertStatusValues;

const ParticipateToWhitelist = () => {
  const [error, setError] = useState(false);
  const [whitelistSuccess, setWhitelistSuccess] = useState(false);
  const { loggedInUser } = useLoggedInUser();

  const isAlreadyOnWhitelist = loggedInUser?.userData?.onWhitelist;

  const handleWhiteList = async () => {
    try {
      const userDocRef = doc(db, 'users', loggedInUser?.docID);

      await setDoc(userDocRef, { onWhitelist: true }, { merge: true });
      await setWhitelistSuccess(true);
    } catch (e) {
      setError(true);
    }
  };

  if (error) <p>something went wrong, please refresh the page and try again</p>;

  return (
    <>
      {!whitelistSuccess && (
        <Button disabled={isAlreadyOnWhitelist} onClick={handleWhiteList} colorScheme="blue">
          {isAlreadyOnWhitelist ? 'you are already on whitelist 😍' : 'participate to whitelist'}
        </Button>
      )}

      {whitelistSuccess && (
        <AlertComponent
          status={Success}
          title="Participation completed"
          description="you are know whitelisted baby 😍"
        />
      )}
    </>
  );
};

export default ParticipateToWhitelist;
