import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Input, Button, Checkbox, Text, Alert, AlertIcon, ModalFooter, useDisclosure, FormControl, FormHelperText, FormLabel, Spacer } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, DocumentData } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdxXBea8LcUaW61FHuMyIdNd98xMdTpxU",
    authDomain: "dessert-imaginarium.firebaseapp.com",
    projectId: "dessert-imaginarium",
    storageBucket: "dessert-imaginarium.appspot.com",
    messagingSenderId: "696495894338",
    appId: "1:696495894338:web:90a14760f0f71e34f9a2db",
    measurementId: "G-3C1WRBGVRH"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button size='lg' color='teal' onClick={onOpen}>Sign Up</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input placeholder='First Name' />
              <FormLabel>Email address</FormLabel>
              <Input placeholder='Email Adress' type='email' />
            </FormControl> 
            <Text py={3}>
              By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You can opt out any time.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='teal' onClick={()=> alert('Signed Up!')}>Sign Up</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SignUp;