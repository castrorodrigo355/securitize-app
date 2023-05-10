import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  HStack,
  Spinner,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { IAddress } from '../../types/address.interface';
import { getDatesDiff } from '../../utils/dates';

interface Props {
  address: IAddress;
  isLoadingTx: boolean;
  isLoadingFav: boolean;
  onClickAddressTxById: () => void;
  onClickToggleFavoriteAddress: () => void;
}

export const AddressHeader = ({
  address,
  isLoadingTx,
  isLoadingFav,
  onClickAddressTxById,
  onClickToggleFavoriteAddress,
}: Props): JSX.Element => {
  const diff: number = getDatesDiff(address.firstTx ?? null);
  const oldAccount: boolean = diff > 365;

  return (
    <Alert status={oldAccount ? 'error' : 'info'}>
      <HStack w='100%' justifyContent='space-between'>
        <HStack color={oldAccount ? 'brown' : 'indigo'}>
          {isLoadingTx ? (
            <Spinner />
          ) : (
            <AlertIcon cursor='pointer' onClick={onClickAddressTxById} />
          )}
          <AlertTitle>Wallet: {address.account.slice(0, 10)}...</AlertTitle>
          {oldAccount && <AlertDescription>is old</AlertDescription>}
        </HStack>
        {isLoadingFav ? (
          <Spinner />
        ) : (
          <StarIcon
            color={address.favorite ? 'yellow.500' : 'gray.500'}
            cursor='pointer'
            onClick={onClickToggleFavoriteAddress}
          />
        )}
      </HStack>
    </Alert>
  );
};

export default AddressHeader;
