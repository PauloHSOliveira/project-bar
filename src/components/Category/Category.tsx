import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react';
import { map } from 'lodash';

const CategoryItem = () => {
  return (
    <Card overflow="hidden" variant="outline">
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">The perfect latte</Heading>

          <Text py="2">
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk.
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Category = () => {
  return (
    <List spacing={4}>
      {map(data, item => (
        <ListItem key={item}>
          <CategoryItem />
        </ListItem>
      ))}
    </List>
  );
};

export default Category;
