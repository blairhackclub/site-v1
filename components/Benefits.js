import React, {useState} from 'react';
import Head from 'next/head';
import config from '../data/config';
import { Formik, Form } from 'formik';
import publicIp from 'public-ip';
import axios from 'axios';

import {
  Box,
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
  const toast=useToast();
  const webhook = require("webhook-discord");

  const Hook = new webhook.Webhook("https://discord.com/api/webhooks/828986417198661682/AlaQVRUqKdq-PF1HZwAdMq1Kyc7a_KfLfhqsgBqFfNYGV5W3DpvJgujrCcYIwxcygGZq");

  const titleCase=(str) => { 
    return str.replace(/[a-z]/i, function (letter) { return letter.toUpperCase(); }).trim();
  } 

  const handleSubmit=async(data) => {
    const ip=await publicIp.v4({
      fallbackUrls: ['https://ifconfig.co/ip']
    });
    data.ip=ip;

    //await console.log(data);
    
    var msg = new webhook.MessageBuilder()
    .setName(data.type.charAt(0).toUpperCase() + data.type.slice(1))
    .setColor(data.type === 'stickers' ? "#ff8c37" : "#338eda")
    .setTitle(`**${data.name} is requesting ${data.type}**`)
    .addField('Discord Tag', data.discord)
    .addField('Email', data.email)
    .addField('IP', `||${data.ip}||`);
    
    if (data.other) msg.addField('Additional comments', data.other);

    await Hook.send(msg);
    
    // Post Data to pageClip
    /* await axios.post('https://send.pageclip.co/LfK0s4HjxLfPFNkPcDfnbfjMaITqPPrR/benefits', data)
    .then(function (response) {
      //console.log(response)

      toast({
        title: "Request Submitted",
        description: "We've recieved your request!",
        status: "success",
        isClosable: true
      });

      })
      .catch(function (error) {
        console.log("Encountered an error while submitting request: "+error);
        
        toast({
          title: "Request Submitted",
          description: "We've recieved your request!",
          status: "success",
          isClosable: true
        });

        toast({
          title: "API Error",
          description: "Encountered an error while submitting your request! :(",
          status: "error",
          isClosable: true
        });
    }); */

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
          initialValues={{name: '', email: '', type: props.benefit ?? "stickers", other: "", discord: ""}}
          onSubmit={(values, {setSubmitting}) => {
          handleSubmit(values);
          }}
        >
        {({values, errors, tocuhed, form, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            {/*props.data.form*/}
            
            <FormControl>
              <Box mb={4}>
                <FormLabel>Full name <Text as="span" color="red">*</Text></FormLabel>
                <Input onChange={handleChange} value={values.name} type="text" name="name" placeholder="Full name" autoComplete="off" isRequired/>
              </Box>
              <Box mb={4}>
                <FormLabel>Email <Text as="span" color="red">*</Text></FormLabel>
                <Input onChange={handleChange} value={values.email} type="email" name="email" placeholder="Email" autoComplete="off" isRequired/>
              </Box>
              <Box mb={4}>
                <FormLabel>Discord Tag <Text as="span" color="red">*</Text></FormLabel>
                <Input onChange={handleChange} value={values.discord} type="text" name="discord" placeholder="Discord Tag (ex. username#1234)" autoComplete="off" isRequired/>
              </Box>
              
              {!props.benefit &&
                <Box mb={4}>
                  <FormLabel>What would you like? <Text as="span" color="red">*</Text></FormLabel>
                  <Select value={values.type} onChange={handleChange} name="type" isRequired>
                    <option value="stickers">Stickers</option>
                    <option value="repl.it">Repl.it Hacker</option>
                    <option value="notion">Notion Pro</option>
                    <option value="figma">Figma Pro</option>
                  </Select>
                </Box>
              }

              <Box mb={4}>
                <FormLabel>Additional comments</FormLabel>
                <Textarea
                  value={values.other}
                  name="other"
                  onChange={handleChange}
                  placeholder="Any additional requests or specifications?"
                  autoComplete="off"
                />
              </Box>
            </FormControl>
            <Text>By submitting, you agree to the <Link href="/benefits/honorcode" color="red" fontWeight="bold" isExternal>Benefits Honor Code</Link>.</Text>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" type="submit" disabled={isSubmitting}>
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
