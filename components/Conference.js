import React from 'React';
import styled from 'styled-components';

const Link = styled.a`
  color: #3a416f;
  opacity: .4;
  position: absolute;
  left: 4%;
  bottom: 4%;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    opacity: 1;
    transition: 160ms ease-in-out;
  }
`

const LightLink = styled(Link)`
  color: #FFF;
  opacity: .4;
`

const Conference = (props) => {
  return props.light ? 
    <LightLink href="https://www.welovespeed.com/en/line-up/">welovespeed</LightLink> :
    <Link href="https://www.welovespeed.com/en/line-up/">welovespeed</Link>
}

export default Conference