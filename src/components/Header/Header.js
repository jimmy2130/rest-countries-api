import React from "react";
import styled from 'styled-components/macro';
import { Link } from "react-router-dom";
import { QUERIES, COLORS } from '../../constants';
import UnstyledButton from '../UnstyledButton';
import { Moon } from '../../svg';
import { useStickyState } from '../../hooks/use-sticky-state.hook';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
	const [colorMode, setColorMode] = useStickyState('light', 'colorMode')
	const handleClick = () => {
		const root = window.document.documentElement
		root.style.setProperty(
			'--color-elements',
			colorMode === 'light' ? COLORS.dark.elements : COLORS.light.elements
		)
		root.style.setProperty(
			'--color-background',
			colorMode === 'light' ? COLORS.dark.background : COLORS.light.background
		)
		root.style.setProperty(
			'--color-text',
			colorMode === 'light' ? COLORS.dark.text : COLORS.light.text
		)
		root.style.setProperty(
			'--color-input',
			colorMode === 'light' ? COLORS.dark.input : COLORS.light.input
		)
		setColorMode(colorMode => colorMode === 'light' ? 'dark' : 'light')
	}

  return (
  	<TopBar>
  		<MaxWidthWrapper>
	  		<Title><NavLink to="/">Where in the world?</NavLink></Title>
	  		<StyledButton
	  			type="button"
	  			onClick={handleClick}
	  		>
	  			<VisuallyHidden>Toggle the color theme</VisuallyHidden>
	  			<Moon/>
	  			{`${colorMode === 'light' ? 'Light' : 'Dark'} Mode`}
	  		</StyledButton>
  		</MaxWidthWrapper>
  	</TopBar>
  );
};

const TopBar = styled.header`
	position: fixed;
	width: 100%;
	height: 80px;
	z-index: 1;

	background: var(--color-elements);
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

	@media ${QUERIES.phoneAndDown} {
		padding-left: 16px;
		padding-right: 16px;
	}
`

const Title = styled.h1`
	font-size: calc(24 / 16 * 1rem);
	font-weight: 800;

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(14 / 16 * 1rem);
	}
`

const NavLink = styled(Link)`
	padding: 12px 24px;
	margin-left: -24px;
	text-decoration: none;
	color: var(--color-text);

	@media ${QUERIES.phoneAndDown} {
		padding: 24px 16px;
		margin-left: -16px;
	}
`

const StyledButton = styled(UnstyledButton)`
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 16px 32px;
	margin-right: -32px;
	color: var(--color-text);
	font-size: calc(16 / 16 * 1rem);
	font-weight: 600;

	@media ${QUERIES.phoneAndDown} {
		padding: 24px 16px;
		margin-right: -16px;
	}
`

export default Header;
