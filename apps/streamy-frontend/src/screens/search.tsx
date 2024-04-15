import * as React from 'react';
import { useSearchMovies } from '../api/movies';
import { useDebounceValue } from 'usehooks-ts';
import { MovieSection } from '../components/movie-section';
import { Flex, Separator, Text, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Link as RadixLink } from '@radix-ui/themes'
import { Link, useSearchParams } from "react-router-dom";

interface ISearchScreenProps { }

const SEARCH_DEBOUNCE = 500

const exploreTerms = [
  'Test',
  'Golf',
  'Life',
  'Rugby',
  'Ghost',
  'Bible Stories from the Old Testament',
  'Testament',
  'Biblical Old Testament Mysteries',
  'Testamento',
  'Test Pattern',
  'The Old Testament',
  'The Testimony',
  'Testament of Youth',
  'The Testament of Sister New Devil'
]

const SearchScreen: React.FunctionComponent<ISearchScreenProps> = (props) => {
  const [searchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useDebounceValue(searchParams.get('query') || '', SEARCH_DEBOUNCE)

  const { data } = useSearchMovies(searchTerm)

  return (
    <Flex direction='column' gap='6'>
      <Flex px='6'>
        <TextField.Root
          color="gray"
          radius="full"
          variant="soft"
          style={{ width: 400 }}
          tabIndex={0}
          placeholder="Search"
          type="search"
          autoCapitalize='false'
          autoCorrect='false'
          autoFocus
          defaultValue={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon />
          </TextField.Slot>
        </TextField.Root>
      </Flex>
      <Flex wrap='wrap' align='center' gap='2' px='6'>
        <Text size='3' highContrast>More to explore: </Text>
        {exploreTerms.map((term, index, self) => (
          <React.Fragment key={`explore-terms-${term}`}>
            <RadixLink asChild size='2'>
              <Link to={`/search?query=${term}`}>{term}</Link>
            </RadixLink>
            {index !== self.length - 1 ? <Separator orientation="vertical" /> : null}
          </React.Fragment>
        ))}
      </Flex>
      <MovieSection title='Search' movies={data} />
    </Flex>
  );
};

export default SearchScreen;
