import React from 'react';
import {
  BtnDelete,
  ContactName,
  ContactNumber,
  ContactWrap,
} from './Contact.styled';

import { HiOutlineTrash } from 'react-icons/hi';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
      <ContactWrap id={contact.id} key={nanoid()}>
      <ContactName>{contact.name}</ContactName>
      <ContactNumber>{contact.phone}</ContactNumber>
      <BtnDelete type="button" onClick={handleDelete}>
        <HiOutlineTrash className="icon" />
      </BtnDelete>
    </ContactWrap>
  );
}