"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";
import type { CardProps } from "./types";

export function Card({ image, heading, ...props }: CardProps) {
  return (
    <Center pt={6} as="button" {...props}>
      <Box
        role="group"
        p={6}
        maxW="330px"
        w="full"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        rounded="lg"
        pos="relative"
        zIndex={1}
      >
        <Box
          rounded="lg"
          mt={-12}
          pos="relative"
          height="230px"
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded="lg"
            height={230}
            width={282}
            objectFit="cover"
            src={image}
            alt={heading}
          />
        </Box>
        <Stack pt={10} align="center">
          <Heading
            fontSize="2xl"
            fontFamily="body"
            fontWeight={500}
            noOfLines={1}
          >
            {heading}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
