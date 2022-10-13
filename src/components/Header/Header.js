import React from "react";
import styled from 'styled-components/macro';
import { Link } from "react-router-dom";

const Header = () => {
  return (
  	<TopBar>
  		<MaxWidthWrapper>
	  		<Title><NavLink to="/">Where in the world?</NavLink></Title>
	  		<p>A Button Placeholder</p>
  		</MaxWidthWrapper>
  	</TopBar>
  );
};

const TopBar = styled.header`
	position: fixed;
	width: 100%;
	height: 80px;

	background: white;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
`

const MaxWidthWrapper = styled.div`
	max-width: 1600px;
	height: 100%;
	padding-left: 80px;
	padding-right: 80px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Title = styled.h1`
	font-size: calc(24 / 16 * 1rem);
	font-weight: 800;
`

const NavLink = styled(Link)`
	text-decoration: none;
	color: var(--color-light-text);
`

export default Header;
