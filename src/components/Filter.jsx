import { useDispatch, useSelector } from 'react-redux';
import { changeFiltervalue } from 'redux/fIlterSlice';
import { selectFilter } from 'redux/selectors';
import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChangeContact = ({ target: { value } }) => {
    dispatch(changeFiltervalue(value));
  };

  return (
    <Box>
      <FormControl>
        <FormLabel
          fontFamily="heading"
          fontSize={['20px', '22px', '24px']}
          fontWeight={500}
          color="rgb(74, 59, 4)"
        >
          Find contacts by name
        </FormLabel>
        <Input
          type="text"
          value={filter}
          onChange={onChangeContact}
          // htmlSize={35}
          width="auto"
          variant="flushed"
          focusBorderColor="rgb(74, 59, 4)"
          color="rgb(138, 60, 0)"
          fontSize={['16px', '18px', '20px', '24px']}
          fontFamily="heading"
          letterSpacing={3}
          fontWeight={500}
        />
      </FormControl>
    </Box>
  );
};
