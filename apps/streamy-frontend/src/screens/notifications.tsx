import { Box, Card, Flex, Heading, Separator, Switch, Text } from '@radix-ui/themes';
import * as React from 'react';

interface INotificationScreenProps {
}

const NotificationScreen: React.FunctionComponent<INotificationScreenProps> = (props) => {
  return (
    <Flex px='6' width='100%' direction='column' gap='4'>
      <Heading size='6' weight='medium' color='gray'>
        Notifications
      </Heading>
      <Card>
        <Flex direction="column">
          <Flex gap="9" align="start" justify="between">
            <Box>
              <Heading as="h4" size="3" mb="1">
                Coming out on 5th April
              </Heading>
              <Text as="p" size="2" color="gray">
                Today
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Card>
      <Card>
        <Flex direction="column">
          <Flex gap="9" align="start" justify="between">
            <Box>
              <Heading as="h4" size="3" mb="1">
                Top 10 in United Kingdom
              </Heading>
              <Text as="p" size="2" color="gray">
                3 weeks ago
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Card>

      <Card>
        <Flex direction="column">

          <Flex gap="9" align="start" justify="between">
            <Box>
              <Heading as="h4" size="3" mb="1">
                New Arrival: New York Mafia
              </Heading>
              <Text as="p" size="2" color="gray">
                1 month ago
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default NotificationScreen;
