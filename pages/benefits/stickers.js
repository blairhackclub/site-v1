import React from 'react';

import Benefits from '../../components/Benefits';

import {
  Container,
  Button,
} from '@chakra-ui/react';

export default function StickersPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Container>
      <Benefits benefit="stickers" open={modalOpen} setOpen={setModalOpen}/>

      <Button onClick = {() => setModalOpen(true)}>Request Stickers</Button>
    </Container>
  )
}
