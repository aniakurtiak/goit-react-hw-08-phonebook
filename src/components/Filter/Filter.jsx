import { useDispatch, useSelector } from 'react-redux';
import { FilterWrap, Input } from './Filter.styled';
import { changeFiltervalue, getFilter } from 'redux/fIlterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeContact = ({ target: { value } }) => {
    dispatch(changeFiltervalue(value));
  };

  return (
    <FilterWrap>
      <label>
        Find contacts by name
        <Input type="text" value={filter} onChange={onChangeContact} />
      </label>
    </FilterWrap>
  );
};
