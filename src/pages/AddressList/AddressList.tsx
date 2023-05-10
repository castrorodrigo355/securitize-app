import { Address } from '../../components/Address';
import { useGetAddressesQuery } from '../../app/addressesApi';

export const AddressList = (): JSX.Element => {
  const { data: addresses = [], isLoading } = useGetAddressesQuery();

  if (isLoading) return <div>...</div>;

  return (
    <>
      {addresses.map((address) => (
        <Address key={address._id} address={address} />
      ))}
    </>
  );
};

export default AddressList;
