import React from "react";
import styled from 'styled-components/macro';

const Header = () => {
  return (
  	<TopBar>
  		<Title>Where in the world?</Title>
  		<p>A Button Placeholder</p>
  	</TopBar>
  );
};

const TopBar = styled.header`
	position: fixed;
	width: 100%;
	height: 80px;
	padding-left: 80px;
	padding-right: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: white;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
`

const Title = styled.h1`
	font-size: calc(24 / 16 * 1rem);
	font-weight: 800;
`

export default Header;
