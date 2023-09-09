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
import Category from '@/components/Category/Category';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Container className={inter.className} width="100%">
      <Flex direction="column" width="100%">
        <Tabs isLazy width="100%">
          <TabList mb="1em" overflowX="auto" overflowY="hidden">
            <Tab>Destaques</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Category />
            </TabPanel>
            <TabPanel>
              <Category />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  );
}
