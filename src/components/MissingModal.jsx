import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../Redux/productsSlice";

export const MissingModal = ({ item, isOpen, onClose }) => {
  const cancelRef = React.useRef();
  const dispatch = useDispatch();

  const handleUpdateStatusNo = () => {
    dispatch(updateStatus({ id: item.id, status: "Missing" }));
    onClose();
  };

  const handleUpdateStatusYes = () => {
    dispatch(updateStatus({ id: item.id, status: "Urgent-Missing" }));
    onClose();
  };

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Missing product</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Is 'Chicken Breast Fillers, Boneless...' urgent?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={handleUpdateStatusNo}>No</Button>
            <Button onClick={handleUpdateStatusYes} colorScheme="red" ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
