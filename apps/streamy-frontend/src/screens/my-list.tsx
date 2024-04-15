import { AspectRatio, Box, Card, Flex, Grid, Heading, Inset, Text } from '@radix-ui/themes';
import { useMyListMovies } from '../api/movies';
import styled from 'styled-components';

const MyListScreen = () => {
  const { data } = useMyListMovies()
  return (
    <Flex direction='column' gap='4'>
      <Box px='6'>
        <Heading size='6' weight='medium' color='gray'>My List</Heading>
      </Box>
      <Grid columns='3' gap='5' px='6'>
        {data.map((film, idx) => (
          <Box key={`my-list-${film.title}-${idx}`} p='3' m='-3' position='relative'>
            <Box mb='2' position='relative'>
              <StyledCard>
                <Inset>
                  <div className='Image'>
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={film.imageUrl}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </AspectRatio>
                  </div>
                </Inset>
              </StyledCard>
            </Box>

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

export default MyListScreen;
