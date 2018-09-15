import React from 'React';
import styled from 'styled-components';

const Link = styled.a`
  color: #3a416f;
  opacity: .4;
  position: absolute;
  bottom: 4%;
  right: 4%;
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

const Twitter = (props) => {
  return props.light ? 
    <LightLink href="https://twitter.com/JonasBadalic">@JonasBadalic</LightLink> :
    <Link href="https://twitter.com/JonasBadalic">@JonasBadalic</Link>
}

export default Twitter
