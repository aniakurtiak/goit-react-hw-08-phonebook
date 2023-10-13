import { useDispatch } from 'react-redux';
import { ItemsWrap, Button } from './ContactItem.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));

  return (
    <ItemsWrap>
      {name}: {number}
      <Button onClick={onDelete}>Delete</Button>
    </ItemsWrap>
  );
};
