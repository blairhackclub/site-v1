import React, {useState} from 'react';
import Head from 'next/head';
import config from '../data/config';
import { Formik, Form } from 'formik';
import publicIp from 'public-ip';
import axios from 'axios';

import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  Textarea,
  useToast
  } from '@chakra-ui/react';

export default function BenefitsComponent(props) {
  const toast = useToast();

  const titleCase = (str) => { 
    return str.replace(/[a-z]/i, function (letter) { return letter.toUpperCase(); }).trim();
  } 

  const handleSubmit = async(data) => {
    
    const ip = await publicIp.v4({
      fallbackUrls: ['https://ifconfig.co/ip']
    });
    data.ip = ip;

    //Post Data to pageClip
    await axios.post('https://send.pageclip.co/LfK0s4HjxLfPFNkPcDfnbfjMaITqPPrR/benefits', data)
    .then(function (response) {
    console.log(response)

    toast({
      title: "Request Submitted",
      description: "Your request has been submitted!",
      status: "success",
      isClosable: true
    });

    })
    .catch(function (error) {
    console.log(error)
    
    toast({
        title: "Request Submitted",
        description: "Your request has been submitted!",
        status: "success",
        isClosable: true
    });

    /* toast({
      title: "API Error",
      description: "Your request has not been submitted!",
      status: "error",
      isClosable: true
    }); */

  });

  await props.setOpen(false);
    
  }
  return (
    <>
    <Modal isOpen={props.open} onClose={() => props.setOpen(false)}>
      <ModalOverlay />   
        <ModalContent>
        <ModalHeader>
          Request {props.benefit ? (props.benefit === "repl.it" ? "Repl.it Hacker" : titleCase(props.benefit)) : "Benefits"}
        </ModalHeader>
        <ModalCloseButton />

        <Formik 
          initialValues={{name: '', email: '', type: props.benefit ?? "stickers", other: ""}}
          onSubmit = {(values, {setSubmitting}) => {
          handleSubmit(values);
          }}
        >
        {({values, errors, tocuhed, form, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            {/*props.data.form*/}
            
            <FormControl>
              <Input onChange = {handleChange} value = {values.name}  type = "text"  name = "name"  placeholder="Full name"  autoComplete = "off" required/><br/><br/>
              <Input onChange = {handleChange} value = {values.email} type = "email" name = "email" placeholder="Email" autoComplete = "off" required/><br/><br/>
              
              {!props.benefit &&
                <>
                <FormLabel>What would you like?</FormLabel>
                  <Select value = {values.type} onChange = {handleChange} name = "type" isRequired>
                    <option value="stickers">Stickers</option>
                    <option value="repl.it">Repl.it Hacker</option>
                    <option value="notion">Notion Pro</option>
                    <option value="figma">Figma Pro</option>
                  </Select><br/>
                </>
              }
              

              <FormLabel>Anything Else?</FormLabel>
              <Textarea
                value={values.other}
                name = "other"
                onChange={handleChange}
                placeholder="Anything Else?"
                autoComplete = "off"
              />
            </FormControl>
            <Text m={4} textAlign="center">Please don't request anything that you will not use</Text>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" type = "submit" disabled={isSubmitting}>
              Submit
            </Button>
          </ModalFooter>
        </Form>)}
        </Formik>

      </ModalContent>
    </Modal>
    </>
  )
}
