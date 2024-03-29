import React, { useCallback, useMemo } from "react";

import { Button, Stack } from "@mantine/core";
import { ContextModalProps, openContextModal } from "@mantine/modals";
import { OpenContextModal } from "@mantine/modals/lib/context";

import {
  HydratedInventoryItemEntry,
  InventoryItemEntry,
} from "~/api/models/Inventory";
import { useAvailableItems } from "~/hooks/firestore";

import { ItemIndex } from "../ItemIndex";

export type AddItemModalInnerProps = {
  onConfirm: (newItems: InventoryItemEntry[]) => void;
};

export const ADD_ITEM_MODAL_KEY = "addItem";

export const addItemModalFactory = (
  innerProps: AddItemModalInnerProps,
  modalProps: Omit<OpenContextModal, "innerProps"> = {}
) => {
  return () =>
    openContextModal({
      modal: ADD_ITEM_MODAL_KEY,
      sx: {
        ".mantine-Modal-modal": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      },
      title: "Add Item",
      ...modalProps,
      innerProps,
    });
};

export const AddItemModal: React.FC<
  ContextModalProps<AddItemModalInnerProps>
> = ({ id, context, innerProps: { onConfirm } }) => {
  const [publicItems, loading] = useAvailableItems();

  const selectItem = useCallback(
    (item: InventoryItemEntry) => {
      onConfirm([item]);
      context.closeModal(id);
    },
    [onConfirm, context, id]
  );

  const transformedItems = useMemo(() => {
    if (!publicItems) {
      return [];
    }

    return publicItems.docs.map((doc) => {
      const data = doc.data();
      const t: HydratedInventoryItemEntry = {
        item: { ref: doc.ref, data, snap: doc },
        itemRef: doc.ref,
        quantity: -1,
      };
      return t;
    });
  }, [publicItems]);

  return (
    <Stack sx={{ height: "100%" }}>
      <ItemIndex
        inventoryItems={transformedItems}
        loading={loading}
        renderSideElement={(i) => (
          <Button onClick={() => selectItem(i)}>Add</Button>
        )}
      />
    </Stack>
  );
};
