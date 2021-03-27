import React from 'react';

import Benefits from '../../components/Benefits';

import {
  Container,
  Button,
} from '@chakra-ui/react';

export default function ReplitPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Container>
      <Benefits benefit="repl.it" open={modalOpen} setOpen={setModalOpen}/>

      <Button onClick = {() => setModalOpen(true)}>Request Repl.it Hacker</Button>
    </Container>
  )
}
