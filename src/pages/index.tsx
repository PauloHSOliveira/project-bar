import { Inter } from 'next/font/google';
import {
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Container className={inter.className} width="100%">
      <Flex direction="column" width="100%">
        <Tabs isLazy width="100%">
          <TabList mb="1em">
            <Tab>Destaques</Tab>
            <Tab>Item 1</Tab>
            <Tab>Item 2</Tab>
            <Tab>Item 3</Tab>
            <Tab>Item 4</Tab>
            <Tab>Item 5</Tab>
            <Tab>Item 6</Tab>
            <Tab>Item 7</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Destaques!</p>
            </TabPanel>
            <TabPanel>
              <p>Item 1</p>
            </TabPanel>
            <TabPanel>
              <p>Item 2</p>
            </TabPanel>
            <TabPanel>
              <p>Item 3</p>
            </TabPanel>
            <TabPanel>
              <p>Item 4</p>
            </TabPanel>
            <TabPanel>
              <p>Item 5</p>
            </TabPanel>
            <TabPanel>
              <p>Item 6</p>
            </TabPanel>
            <TabPanel>
              <p>Item 7</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  );
}
