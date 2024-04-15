import { Flex } from "@radix-ui/themes"
import { useMoviesByCategories } from "../api/movies"
import { MovieSection } from "../components/movie-section"

export const Home = () => {
  const { data } = useMoviesByCategories()

  return (
    <Flex direction='column' gap='4'>
      {(Object.keys(data) as Array<keyof typeof data>).map((key) => (
        <MovieSection key={`${key}`} title={key} movies={data[key]} />
      ))}
    </Flex>
  )
}