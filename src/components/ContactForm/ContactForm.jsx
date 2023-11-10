import {
  Form,
  MarkField,
  ContactName,
  ContactNumber,
  BtnAdd,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = event => {
    event.preventDefault();

    const newUser = {
      name: event.target.elements.name.value,
      phone: event.target.elements.phone.value,
    };

    const hasContact = contacts.some(
      contact => contact.name === event.target.elements.name.value
    );
    if (hasContact) {
      alert(`${hasContact} is already in contacts`);
      event.target.reset();
      return;
    }
    dispatch(addContact(newUser));
    event.target.reset();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <MarkField>Name</MarkField>
        <ContactName type="text" name="name" required />
        <MarkField>Number</MarkField>
        <ContactNumber type="tel" name="phone" required />
        <BtnAdd type="submit">Add contact</BtnAdd>
      </Form>
    </div>
  );
}