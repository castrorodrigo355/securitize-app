import { useState, ChangeEvent } from 'react';
import { EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { HStack, Input, Text, VStack, Flex } from '@chakra-ui/react';
import { IAddress } from '../../types/address.interface';
import { Conversion } from '../Conversion';

interface Props {
  address: IAddress;
}

export const AddressBody = ({ address }: Props): JSX.Element => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(address.balance);

  const toggleMode = (): void => setEditMode(true);
  const cancelEdition = (): void => {
    setValue(address.balance);
    setEditMode(false);
  };

  const confirmEdition = (): void => setEditMode(false);
  const onBalanceChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setValue(String(event.target.value));

  return (
    <HStack h='120px'>
      <VStack p={5} bg='gray.50' h='100%' w='50%' borderRadius={5}>
        {editMode ? (
          <>
            <HStack w='100%' mb={1} justifyContent='flex-end'>
              <CloseIcon
                color='red.500'
                cursor='pointer'
                onClick={cancelEdition}
                mx={1}
              />
              <CheckIcon
                color='green.500'
                cursor='pointer'
                onClick={confirmEdition}
              />
            </HStack>
            <Input
              bg='white'
              type='number'
              placeholder='Rate'
              value={value}
              onChange={onBalanceChange}
            />
          </>
        ) : (
          <>
            <Flex w='100%' justifyContent='flex-end'>
              <EditIcon
                color='blue.500'
                cursor='pointer'
                onClick={toggleMode}
              />
            </Flex>
            <HStack w='100%'>
              <Text m={3} fontWeight='bold'>
                {value}
              </Text>
            </HStack>
          </>
        )}
      </VStack>
      <Conversion value={value} />
    </HStack>
  );
};

export default AddressBody;
