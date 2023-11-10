import React from 'react';
import { Theme, TitleForm, TitleContact } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function App() {
  return (
    <Theme>
      <TitleForm>Phonebook</TitleForm>
      <ContactForm />
      <TitleContact>Contacts</TitleContact>
      <Filter />
      <ContactList />
    </Theme>
  );
}