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
  const Airtable = require("airtable");

  const Hook = new webhook.Webhook("https://discord.com/api/webhooks/828986417198661682/AlaQVRUqKdq-PF1HZwAdMq1Kyc7a_KfLfhqsgBqFfNYGV5W3DpvJgujrCcYIwxcygGZq");

  const titleCase=(str) => { 
    return str.replace(/[a-z]/i, function (letter) { return letter.toUpperCase(); }).trim();
  } 

  const handleSubmit=async(data) => {
    data.ip = await publicIp.v4({
      fallbackUrls: ['https://ifconfig.co/ip']
    });

    //Post Data to airtable
    let base = new Airtable({apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}).base('appSKsWct5I3Mkfxp');

    await base(data.type === "stickers" ? 'Stickers' : 'Repl.it Hacker').create([
      {
        "fields": {
          "Name": data.name,
          "Email": data.email,
          "Discord Tag": data.discord,
          "Status": "Todo",
          "IP Address": data.ip,
          "Additional comments": data.other
        }
      }
    ], async function(err, records) {
      if (err) {
        console.error(err);

        await toast({
          title: "API Error",
          description: "Encountered an error while submitting your request! :(",
          status: "error",
          isClosable: true
        });

        return;
      }
      records.forEach(async function (record) {
        let id = record.getId();
        let tableId = data.type === "stickers" ? "tbljxlqRoeS69K4aP/viwSX0nUcFwaMUHCU" : "tblGJauJQz8dOOEpM/viwf9PrME0MhrYhRR";

        //Post Webhook to discord
        let msg = await new webhook.MessageBuilder()
        .setName(titleCase(data.type)+ " Request")
        .setColor(data.type === 'stickers' ? "#a633d6" : "#338eda")
        .setTitle(`**${data.name} is requesting ${data.type}**`)
        .setURL(`https://airtable.com/${tableId}/${id}?blocks=hide`)
        .addField('Discord Tag', data.discord)
        .addField('Email', data.email)
        .addField('IP', `||${data.ip}||`)
    
        if (data.other) await msg.addField('Additional comments', data.other);

        await Hook.send(msg);

        await toast({
          title: "Request Submitted",
          description: "We've recieved your request!",
          status: "success",
          isClosable: true
        });
      });
    });

    await props.setOpen(false);
  }
  return (
    <>
    <Modal isOpen={props.open} onClose={() => props.setOpen(false)}>
      <ModalOverlay />   
        <ModalContent>
        <ModalHeader>
          Request {props.benefit ? (props.benefit === "repl.it" ? "Replit Hacker" : titleCase(props.benefit)) : "Benefits"}
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
            <Text fontStyle="italic">After submitting, more steps will be sent to your email inbox in a couple of days.</Text>
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