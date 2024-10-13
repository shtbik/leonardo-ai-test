import type { ModalProps } from "@chakra-ui/react";
import type { TCharacter } from "@/types/character";

export interface CharacterModalProps extends Omit<ModalProps, "children"> {
  character?: TCharacter;
  loading?: boolean;
  error?: boolean;
}
