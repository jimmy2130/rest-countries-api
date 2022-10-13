import React from "react";
import styled from 'styled-components/macro';
import { useSubmit } from 'react-router-dom';
import { SearchIcon } from '../../svg';

const Search = ({ q }) => {
	const submit = useSubmit()
  return (
		<Wrapper htmlFor="search">
			<IconWrapper>
				<SearchIcon/>
			</IconWrapper>
			<Input
				id="search"
				type="search"
				name="q"
				placeholder="Search for a country..."
				onChange={(e) => {
					const isFirstSearch = q === null || q === ""
					submit(e.currentTarget.form, {
						replace: !isFirstSearch
					})
				}}
			/>
		</Wrapper>
  );
};

const Wrapper = styled.label`
	position: relative;
	width: 100%;
	max-width: 480px;
	height: 56px;	
	display: flex;
	align-items: center;
`

const IconWrapper = styled.span`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 32px;
	height: 100%;
	display: flex;
	align-items: center;
	pointer-events: none;
`

const Input = styled.input`
	width: 100%;
	height: 100%;
	padding: 18px 32px 18px 74px;
	background: var(--color-light-elements);
	box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
	border: none;
	border-radius: 5px;
	color: var(--color-light-input);
	font-size: calc(14 / 16 * 1rem);
`

export default Search;