import * as React from 'react';
import { useMoviesByCategories } from '../api/movies';
import { Box, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import styled from 'styled-components';
import { Image } from './core';

interface ICategoryProps {
  category: Parameters<typeof useMoviesByCategories>[0]
}

export const Category: React.FunctionComponent<ICategoryProps> = (props) => {
  const { data } = useMoviesByCategories(props.category)

  if (!props.category) {
    return null
  }

  return (
    <Flex direction='column' gap='4'>
      <Box px='6'>
        <Heading size='6' weight='medium' color='gray'>{props.category}</Heading>
      </Box>
      <Grid columns='3' gap='5' px='6'>
        {data[props.category].map((film, idx) => (
          <Box key={`${props.category}-${film.title}-${idx}`} p='3' m='-3' position='relative'>
            <StyledCard>
              <div className='Image'>
                <Image src={film.imageUrl} />
              </div>
            </StyledCard>

            <Box position='absolute' bottom='9' left='6'>
              <Text size='3' weight='bold'>
                {film.title}
              </Text>
            </Box>

            <Box style={{ visibility: 'hidden' }}>
              <Text size='3' weight='bold'>
                {film.title}
              </Text>
            </Box>
          </Box>
        ))
        }
      </Grid>
    </Flex>
  );
};

const StyledCard = styled(Card)`
  cursor: pointer;
  transition: transform 0.2s ease;

  .Image {
    filter: brightness(0.5);
  }

  &:hover .Image {
    filter: none;
  }

  &:hover {
    transform: scale(1.05);
  }
`
