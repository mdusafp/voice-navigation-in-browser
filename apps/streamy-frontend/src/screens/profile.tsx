import { Flex, Text } from '@radix-ui/themes';
import * as React from 'react';

interface IProfileScreenProps {
}

const ProfileScreen: React.FunctionComponent<IProfileScreenProps> = (props) => {
  return (
    <Flex m="4" justify="center" position="relative" align='center' direction='column' gap='4'>
      <img
        width="200"
        height="200"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=200&h=200&dpr=2&q=80"
        style={{
          borderRadius: 'var(--radius-3)',
        }}
      />
      <Flex direction='column' gap='2'>
        <Text align='center' size='3'>My Profile</Text>
        <Text align='center' size='2' color='gray'>some@gmail.com</Text>
      </Flex>
    </Flex>
  );
};

export default ProfileScreen;
