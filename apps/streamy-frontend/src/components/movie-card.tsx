
import { Text } from '@radix-ui/themes';

import styled, { css } from 'styled-components';
import { Image } from './core';

interface MovieCardProps {
  title: string
  imageUrl: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({ title, imageUrl }) => {
  return (
    <MovieCardStyled>
      <div className='Container'>
        <Image src={imageUrl} />
        <div className='Title'>
          <Text size='3' weight='bold'>
            {title}
          </Text>
        </div>
      </div>
    </MovieCardStyled>
  );
};

const imageStyles = css`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export const MovieCardStyled = styled.div`
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px 0 0 8px;
  overflow: hidden;
  transition: transform 0.2s ease;
  scroll-snap-align: start;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  .Container {
    width: 300px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 10px var(--black-a7);
  }

  .Title {
    bottom: 1rem;
    color: var(--base-colors-light-grey);
    margin-left: 1rem;
    position: absolute;
  }

  .Image {
    filter: brightness(0.5);
    ${imageStyles}
  }

  &:hover .Image {
    filter: none;
  }
`;
