import React from 'react';

import Benefits from '../../components/Benefits';

import {
  Container,
} from '@chakra-ui/react';

export default function ReplitPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Container>
      <Benefits benefit="repl.it" open={modalOpen} setOpen={setModalOpen}/>
    </Container>
  )
}
