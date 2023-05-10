import { ChangeEvent, useEffect, useState } from 'react';
import { Select, Text, VStack } from '@chakra-ui/react';
import { Currency } from '../../types/currency.interface';
import { useGetConversionsQuery } from '../../app/conversionsApi';
import { getConversion } from '../../utils/conversion';

interface Props {
  value: string;
}

export const Conversion = ({ value }: Props): JSX.Element => {
  const { data } = useGetConversionsQuery();

  const [currency, setCurrency] = useState<Currency>(Currency.USD);
  const [conversion, setConversion] = useState<number | string>(value);

  const onChangeCurrency = (event: ChangeEvent<HTMLSelectElement>): void =>
    setCurrency(event.currentTarget.value as Currency);

  useEffect(() => {
    if (data && data.length) {
      setConversion(getConversion(data, value, currency));
    }
  }, [value, data, currency]);

  return (
    <VStack
      p={5}
      bg='gray.50'
      w='50%'
      h='100%'
      borderRadius={5}
      alignItems='flex-start'
    >
      <Select
        w='50%'
        bg='white'
        placeholder='Currency'
        value={currency}
        onChange={onChangeCurrency}
      >
        {Object.keys(Currency).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
      <Text fontWeight='bold'>{conversion}</Text>
    </VStack>
  );
};

export default Conversion;
