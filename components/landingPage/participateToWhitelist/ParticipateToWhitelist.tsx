import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';

import AlertComponent from '@/components/alert';
import { AlertStatusValues } from '@/utils/interfaces/alertStatuses';

const { Success } = AlertStatusValues;

const ParticipateToWhitelist = () => {
  const [error, setError] = useState(false);
  const [notify, setNotify] = useState(false);
  const { user } = useMoralis();

  const isAlreadyOnWhitelist = user?.get('whiteList');

  const handleWhiteList = async () => {
    // add whiteList in DB for user
    try {
      await user?.save('whiteList', true);
      setNotify(true);
    } catch (e) {
      setError(true);
    }
  };

  if (error) <p>something went wrong, please refresh the page and try again</p>;

  return (
    <>
      <Button
        width="250px"
        disabled={isAlreadyOnWhitelist}
        onClick={handleWhiteList}
        colorScheme="blue"
      >
        {isAlreadyOnWhitelist ? 'you are already on whitelist 😍' : 'participate to whitelist'}
      </Button>

      {notify && (
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
