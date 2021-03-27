import React from 'react';

import Benefits from '../../components/Benefits';

import {
  Container,
} from '@chakra-ui/react';

export default function StickersPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Container>
      <Benefits benefit="stickers" open={modalOpen} setOpen={setModalOpen}/>
    </Container>
  )
}
