import styled from 'styled-components';


import { NavLink, Link as RRDLink } from 'react-router-dom';
import { Link as RadixLink, type LinkProps as RadixLinkProps } from '@radix-ui/themes';


import * as React from 'react';

export interface ILinkProps extends Omit<RadixLinkProps, 'href'> {
  as?: typeof NavLink | typeof RRDLink
  href: `/${string}`
  external?: boolean
}

export const Link: React.FunctionComponent<ILinkProps> = ({
  as,
  href,
  external,
  children,
  ...props
}) => {
  if (external) {
    <LinkBox><RadixLink {...props} target='_blank'>{children}</RadixLink></LinkBox>
  }

  const LinkComponent = as || RRDLink

  return (
    <LinkBox>
      <RadixLink asChild {...props}>
        <LinkComponent to={href}>{children}</LinkComponent>
      </RadixLink>
    </LinkBox>
  );
};

const LinkBox = styled.span`
  .rt-Link {
    color: var(--white-a11);

    &.active {
      color: var(--iris-11);
    }
  }
`