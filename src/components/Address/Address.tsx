import { Card, CardBody, CardHeader } from '@chakra-ui/react';
import { IAddress } from '../../types/address.interface';
import { AddressHeader } from '../AddressHeader';
import { AddressBody } from '../AddressBody';
import {
  useUpdateAddressTxByIdMutation,
  useToggleFavoriteAddressByIdMutation,
} from '../../app/addressesApi';

interface Props {
  address: IAddress;
}

export const Address = ({ address }: Props): JSX.Element => {
  const [updateAddressTxById, { isLoading: isLoadingTx }] =
    useUpdateAddressTxByIdMutation();
  const [toggleFavoriteAddressById, { isLoading: isLoadingFav }] =
    useToggleFavoriteAddressByIdMutation();

  const onClickAddressTxById = async () => {
    if (!address.firstTx) {
      await updateAddressTxById(address._id);
    }
  };

  const onClickToggleFavoriteAddress = async () =>
    await toggleFavoriteAddressById(address._id);

  return (
    <Card w='600px' mb={8}>
      <CardHeader p={0}>
        <AddressHeader
          address={address}
          isLoadingTx={isLoadingTx}
          isLoadingFav={isLoadingFav}
          onClickAddressTxById={onClickAddressTxById}
          onClickToggleFavoriteAddress={onClickToggleFavoriteAddress}
        />
      </CardHeader>
      <CardBody p='2rem 0'>
        <AddressBody address={address} />
      </CardBody>
    </Card>
  );
};

export default Address;
