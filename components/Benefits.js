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
  const [open, setOpen] = useState(false);
  const toast = useToast();

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
      title: "API Error",
      description: "Your request has not been submitted!",
      status: "error",
      isClosable: true
    });

  });

  await setOpen(false);
    
  }
  return (
    <>
      <Head>
        <title>Benefits{config.titleSuffix}</title>
      </Head>

      <Box bg="brand.red">
        <Container maxW="container.lg" px={8} py={12} align="center">
        <Heading as="h1" size="2xl" my={2} color="white">
          Benefits
        </Heading>
        <Heading as="h2" size="lg" my={2} color="white" fontWeight="normal">
          Thanks to <Link href="https://hackclub.com" fontWeight="bold" color="brand.yellow" isExternal>Hack Club</Link>, clubs members recieve FREE perks.
        </Heading>
        </Container>
      </Box>

    <Modal isOpen={open} onClose={() => setOpen(false)}>
      <ModalOverlay />   
        <ModalContent>
        <ModalHeader>
          Request Benefits
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
