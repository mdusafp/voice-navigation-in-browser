import styled from "styled-components";
import { MovieCard } from "./movie-card";
import { FC } from "react";
import { Box, Flex, Heading } from "@radix-ui/themes";

type Movie = {
  title: string
  imageUrl: string
}

interface IMovieSection {
  title: string
  movies: Movie[]
}

export const MovieSection: FC<IMovieSection> = ({
  title,
  movies,
}) => {
  return (
    <Flex direction='column'>
      <Box px='6'>
        <Heading size='6' weight='medium' color='gray'>
          {title}
        </Heading>
      </Box>
      <MovieList>
        {movies.map((movie, index) => (
          <MovieCard key={`1-${index}`} title={movie.title} imageUrl={movie.imageUrl} />
        ))}
      </MovieList>
    </Flex>
  )
}

export const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }

  & > div:first-of-type {
    padding-left: 2rem;
  }

  & > div:last-of-type {
    padding-right: 2rem;
  }
`;