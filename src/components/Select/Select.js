import React from "react";
import styled from 'styled-components/macro';
import { useSubmit } from 'react-router-dom';
import { ChevronDown } from '../../svg';
const Select = () => {
	const submit = useSubmit();
  return (
		<Wrapper htmlFor="filter">
			<SelectBase
				id="filter"
				name="filter"
				onChange={(e) => {
					submit(e.currentTarget.form)
				}}
			>
				<option value="">Filter by Region</option>
				<option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
				<option value="Antarctic">Antarctic</option>
			</SelectBase>
			<Cover/>
			<IconWrapper>
				<ChevronDown/>
			</IconWrapper>
		</Wrapper>
  );
};

const Wrapper = styled.label`
	position: relative;
	width: 200px;
	height: 56px;
	display: flex;
	align-items: center;
`


const SelectBase = styled.select`
	width: 100%;
	height: 100%;
	padding: 18px 24px;
	box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
	background: var(--color-light-elements);
	border: none;
	border-radius: 5px;
	color: var(--color-light-text);
	font-size: calc(14 / 16 * 1rem);
`
const Cover = styled.span`
	position: absolute;
	top: 2px;
	right: 2px;
	bottom: 2px;
	width: 20px;
	background: var(--color-light-elements);
	border-radius: 5px;
	pointer-events: none;
`

const IconWrapper = styled.span`
	position: absolute;
	top: 0px;
	bottom: 0px;
	height: 100%;
	display: flex;
	align-items: center;
	right: 20px;
	pointer-events: none;
`

export default Select;
