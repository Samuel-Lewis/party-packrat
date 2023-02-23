import React from "react";

import { Group, Paper, Spoiler, Stack, Text, Title } from "@mantine/core";

import { HydratedInventoryItemEntry } from "~/api/firebase/models/Inventory";

import { Category } from "../Category";
import { Value } from "../Value";

export interface ItemCardProps {
  inventoryItem: HydratedInventoryItemEntry;
}

export const ItemCard: React.FC<ItemCardProps> = ({ inventoryItem }) => {
  const { name, description, category, rarity, value } =
    inventoryItem.item?.data ?? {};
  return (
    <Paper my="xs" p="xs" withBorder>
      <Stack>
        <Title order={4}>{name}</Title>
        <Group>
          <Category category={category} />
          <Text>{rarity}</Text>
          <Value value={value} />
        </Group>
      </Stack>
      <Spoiler maxHeight={24} hideLabel={"Hide"} showLabel={"More..."}>
        {description}
      </Spoiler>
    </Paper>
  );
};