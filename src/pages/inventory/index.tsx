import Link from "next/link";
import React from "react";
import { useCollectionOnce } from "react-firebase-hooks/firestore";

import { createStyles, Group, Stack, Table, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

import { inventoryConnection } from "~/api/firebase/firestore/inventory";
import { LoadingWrapper } from "~/components/LoadingWrapper";
import { NavButton } from "~/components/NavButton";
import { useLocalUser } from "~/hooks/useLocalUser";

const useStyles = createStyles(() => ({
  row: {
    height: "60px",
  },
}));

const InventoryIndexPage: React.FC = () => {
  const { localUser, isLoading } = useLocalUser();
  const { classes } = useStyles();

  const [inventories, inventoriesLoading] = useCollectionOnce(
    inventoryConnection.ownedInventoriesQuery(localUser?.ref)
  );

  return (
    <>
      <Stack>
        <Title order={2}>Your Inventories</Title>
        <Group>
          <NavButton href="/inventory/create" leftIcon={<IconPlus />}>
            Create
          </NavButton>
        </Group>
        <LoadingWrapper isLoading={inventoriesLoading || isLoading}>
          <Table verticalSpacing={"xl"}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Total Items</th>
                <th>Unique Items</th>
                {/* <th>Owner</th> */}
                {/* <th>Members</th> */}
              </tr>
            </thead>
            {inventories?.docs.map((inventory) => {
              const totalItems = inventory
                .data()
                .items.reduce((acc, item) => acc + item.quantity, 0);

              return (
                <tr key={inventory.id} className={classes.row}>
                  <td>
                    <Link href={`/inventory/${inventory.id}`}>
                      {inventory.data().name}
                    </Link>
                  </td>
                  <td>{inventory.data().description}</td>
                  <td>{totalItems}</td>
                  <td>{inventory.data().items.length}</td>
                  {/* <td>inventory.data().owner owner</td> */}
                  {/* <td>{inventory.data().members.length}</td> */}
                </tr>
              );
            })}
          </Table>
        </LoadingWrapper>
      </Stack>
    </>
  );
};

export default InventoryIndexPage;
