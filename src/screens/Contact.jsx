import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import AddContact from "../components/AddContact";
import ContactList from "../components/ContactList";
import { globalStyles } from "../styles/global";
import { useDispatch } from "react-redux";
import { contactReducer, ContactsProvider } from "../reducers/contactReducer";

export default function Contact({ navigation }) {
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("tabPress", (e) => {
  //     console.log(e);
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  // let nextId = 3;
  // const initialContacts = [
  //   { id: 0, name: "Sara Lee" },
  //   { id: 1, name: "John Doe" },
  //   { id: 2, name: "Jack Doe" },
  // ];
  // const [contacts, setContacts] = React.useState(initialContacts);

  // const [contacts, dispatch] = React.useReducer(
  //   contactReducer,
  //   initialContacts
  // );

  // // * using useReducer to manage the state of the contacts
  // function handleAddContact(name) {
  //   dispatch({ type: "ADD", id: nextId++, name });
  // }
  // function handleDeleteContact(id) {
  //   dispatch({ type: "DELETE", id });
  // }
  // function handleChangeContact(contact) {
  //   dispatch({ type: "CHANGE", contact });
  // }

  // * use state
  // function handleAddContact(name) {
  //   setContacts([...contacts, { id: nextId++, name }]);
  // }
  // function handleDeleteContact(id) {
  //   setContacts(contacts.filter((contact) => contact.id !== id));
  // }
  // function handleChangeContact(contact) {
  //   setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
  // }

  // * With provider
  return (
    <ContactsProvider>
      <View style={globalStyles.simpleContainer}>
        <AddContact />
        <ContactList />
      </View>
    </ContactsProvider>
  );
}
