
import styled from 'styled-components';

export const PrimaryButton = styled.button`
  font-size: 0.75rem;
  font-family: 'Hind', Arial, sans-serif;
  box-shadow: 0 7px 14px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4), inset 0 -2px 0 0 #cfd1e3;
  height: 3rem;
  background: linear-gradient(#fff, #e4e4e9);
  will-change: box-shadow, transform;
  letter-spacing: 1.5px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  width: 12.5rem;
  cursor: pointer;
  align-items: center;
  color: #5d6494;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 9999px;
  transition: box-shadow 0.15s ease, transform 0.15s ease, -webkit-box-shadow 0.15s ease, -webkit-transform 0.15s ease;
  margin: 0 2rem;
  font-size: 0.75rem;
`

export const SecondaryButton = styled.button`
font-size: 0.75rem;
font-family: 'Hind', Arial, sans-serif;
background: linear-gradient(#aeb7ff, #5468ff);
text-shadow: 0 1px 0 #4b5ef0;
box-shadow: 0 7px 13px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4), inset 0 -2px 0 0 #4b58ba;
height: 3rem;
will-change: box-shadow, transform;
letter-spacing: 1.5px;
text-decoration: none;
text-transform: uppercase;
text-align: center;
font-weight: 600;
width: 12.5rem;
cursor: pointer;
align-items: center;
color: #5d6494;
padding-left: 2rem;
padding-right: 2rem;
border-radius: 9999px;
transition: box-shadow 0.15s ease, transform 0.15s ease, -webkit-box-shadow 0.15s ease, -webkit-transform 0.15s ease;
color: #fff;
margin: 0 2rem;
font-size: 0.75rem;
border: 0;
&:focus {
  outline: none
}
`