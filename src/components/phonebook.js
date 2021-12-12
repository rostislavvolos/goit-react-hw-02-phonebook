// import style from "./Phonebook.module.css";
import React from "react";
import Form from "./form-section/form";
import { nanoid } from 'nanoid';
import ContactList from './ContactList/Contactlist';
import FilterList from './FilterList/FilterList';

class PhoneBook extends React.Component {
    state = {
        contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: ''
      }

      getFilteredContacts() {
        return this.state.contacts.filter(contact => 
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
          )
      }


      addContact = contact => {
        if (this.state.contacts.some(item => item.name.toLowerCase() === contact.name.toLowerCase(),)){
          alert('go to dupa')
          return;
        }
        this.setState(prevState =>({
          contacts: [...prevState.contacts, {...contact, id: nanoid()}]
        }))
      }
      

      deleteContact = contactId => {
        this.setState(prevState => ({contacts: prevState.contacts.filter(
          contact =>  contact.id !== contactId) }))
      }

      onFilterHandleChange = filter => {
        this.setState({filter})
      }



  render() {
    const {filter} = this.state;
    const visibleContacts = this.getFilteredContacts();
    // console.log(visibleContacts)
    return (
      <div>
        <h2>Phonebook</h2>
        <Form addContact={this.addContact}/>
        <h2>Contacts</h2>
        <FilterList filter={filter} onFilterHandleChange={this.onFilterHandleChange}/>
        <ContactList contact={visibleContacts} onDelete={this.deleteContact}/>
      </div>

    );
  }
}

export default PhoneBook;
