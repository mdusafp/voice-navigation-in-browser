import * as React from 'react';
import { AspectRatio, Inset } from '@radix-ui/themes';
import styled from 'styled-components';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

export interface IImageProps extends LazyLoadImageProps { }

export const Image: React.FunctionComponent<IImageProps> = (props) => {
  return (
    <Inset>
      <AspectRatio ratio={16 / 9}>
        <StyledLazyLoadImage {...props} className='Image' />
      </AspectRatio>
    </Inset>
  );
};

const StyledLazyLoadImage = styled(LazyLoadImage)`
  background-color: var(--black-a11);
  height: 100%;
  object-fit: cover;
  width: 100%;
`
