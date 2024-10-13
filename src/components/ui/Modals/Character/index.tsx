import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Heading,
  Stack,
  Center,
  Avatar,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  List,
  ListItem,
} from "@chakra-ui/react";

import type { CharacterModalProps } from "./types";

export function CharacterModal({
  loading,
  error,
  character,
  ...modalProps
}: CharacterModalProps) {
  return (
    <Modal {...modalProps}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Center py={6}>
            <Box w="full" rounded="lg" textAlign="center">
              <CharacterModalBody
                character={character}
                loading={loading}
                error={error}
              />
            </Box>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function CharacterModalBody({
  character,
  loading,
  error,
}: Pick<CharacterModalProps, "character" | "loading" | "error">) {
  if (loading) {
    return (
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        alignItems="center"
        h="300px"
      >
        <Spinner size="xl" />
      </Stack>
    );
  }

  if (error || !character)
    return (
      <Alert status="error" mt={8}>
        <AlertIcon />
        An issue occurred! Try again later.
      </Alert>
    );

  return (
    <>
      <Avatar
        size="xl"
        src={character.image}
        mb={4}
        pos="relative"
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: character.status === "Alive" ? "green.300" : "gray.300",
          border: "2px solid white",
          rounded: "full",
          pos: "absolute",
          bottom: 0,
          right: 3,
        }}
      />
      <Heading fontSize="2xl" fontFamily="body">
        {character.name}
      </Heading>
      <Text fontWeight={600} color="gray.500" mb={4}>
        status: {character.status}
      </Text>

      <List spacing={3}>
        <ListItem>species: {character.species}</ListItem>
        <ListItem>gender: {character.gender}</ListItem>
        <ListItem>origin: {character.origin.name}</ListItem>
        <ListItem>location: {character.location.name}</ListItem>
      </List>
    </>
  );
}
