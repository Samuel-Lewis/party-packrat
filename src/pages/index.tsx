import {
  Button,
  Group,
  Paper,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";

import { addItemModalFactory } from "~/components/modals";

export default function IndexPage() {
  const theme = useMantineTheme();

  return (
    <Stack>
      <Group>
        {Object.keys(theme.colors).map((color) => (
          <Button
            key={color}
            color={color}
            onClick={addItemModalFactory({
              onConfirm: () => [],
            })}
          >
            {color}
          </Button>
        ))}
      </Group>

      <Paper withBorder p="sm">
        <Title order={3}>TODO</Title>
        <ul>
          <li>
            List of associated inventories. Links to the given inventories
          </li>
          <li>Info about the project</li>
        </ul>
      </Paper>
    </Stack>
  );
}
