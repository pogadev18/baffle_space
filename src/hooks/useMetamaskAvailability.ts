import { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const useMetamaskAvailability = () => {
  const [metamaskAvailable, setMetamaskAvailable] = useState(false);

  useEffect(() => {
    const checkMetamaskAvailability = async () => {
      try {
        const provider = await detectEthereumProvider();

        if (provider) setMetamaskAvailable(true);
        if (!provider) setMetamaskAvailable(false);
      } catch (e) {
        setMetamaskAvailable(false);
      }
    };

    checkMetamaskAvailability();
  }, []);

  return { metamaskAvailable };
};

export default useMetamaskAvailability;
