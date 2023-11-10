import React, { useEffect } from 'react';
import { Wrap } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { fetchContacts } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

export default function ContactList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const arrContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // console.log(arrContacts);
  const showArr = Array.isArray(arrContacts) && arrContacts.length > 0;

  return (
    <Wrap>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {showArr &&
        arrContacts.map(contact => {
          return <Contact contact={contact} key={nanoid()} />;
        })}
    </Wrap>
  );
}