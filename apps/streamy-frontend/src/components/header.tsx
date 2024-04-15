import styled from 'styled-components';

import {
  MagnifyingGlassIcon,
  BellIcon,
} from '@radix-ui/react-icons';

import { NavLink } from 'react-router-dom';
import { Flex, Heading } from '@radix-ui/themes';

import * as Avatar from '@radix-ui/react-avatar';

import { ILinkProps, Link } from './core';

export const Header = () => {
  const iconSize = '24'

  const textLinks: ILinkProps[] = [
    { href: '/', children: 'Home' },
    { href: '/categories/new', children: 'New & Popular' },
    { href: '/categories/series', children: 'Series' },
    { href: '/categories/dramas', children: 'Dramas' },
    { href: '/categories/animations', children: 'Animations' },
    { href: '/my-list', children: 'My List' },
  ]

  const iconLinks: ILinkProps[] = [
    { href: '/search', children: <MagnifyingGlassIcon width={iconSize} height={iconSize} /> },
    { href: '/notifications', children: <BellIcon width={iconSize} height={iconSize} /> },
    {
      href: '/profile', children: <StyledAvatar>
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image
            className="AvatarImage"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            CT
          </Avatar.Fallback>
        </Avatar.Root>
      </StyledAvatar>
    }
  ]

  return (
    <HeaderBox>
      <Flex px='6' py='4' gap='6'>
        <Heading size='8' color='iris'>
          STREAMY
        </Heading>
        <Flex flexGrow='1' gap='4' align='center'>
          {textLinks.map(link => <Link key={`nav-link-${link.href}`} {...link} as={NavLink} />)}
        </Flex>
        <UserControls>
          {iconLinks.map(link => <Link key={`icon-link-${link.href}`} {...link} />)}
        </UserControls>
      </Flex>
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  position: fixed;
  width: 100%;
  background-color: var(--black-a7);
  z-index: 10;
  top: 0;

  a:hover {
    color: var(--iris-11);
    text-decoration-color: var(--iris-6);
  }
`;

const UserControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledAvatar = styled.div`
  cursor: pointer;

  .AvatarRoot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: var(--black-a3);
  }

  .AvatarImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  .AvatarFallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: var(--violet-11);
    font-size: 15px;
    line-height: 1;
    font-weight: 500;
  }

`