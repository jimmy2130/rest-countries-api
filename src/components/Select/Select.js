import React from "react";
import styled from 'styled-components/macro';
import { useSubmit } from 'react-router-dom';
import { ChevronDown } from '../../svg';
import { QUERIES } from '../../constants'
import VisuallyHidden from '../VisuallyHidden';

const Select = ({ filter }) => {
	const submit = useSubmit();
  return (
		<Wrapper htmlFor="filter">
			<VisuallyHidden>Filter countries by region</VisuallyHidden>
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
			<Cover><CoverText>{filter === "" ? "Filter by Region" : filter}</CoverText></Cover>
			<IconWrapper>
				<ChevronDown/>
			</IconWrapper>
		</Wrapper>
  );
};

const Wrapper = styled.label`
	position: relative;
	min-width: 200px;
	height: 56px;
	display: flex;
	align-items: center;

	@media ${QUERIES.phoneAndDown} {
		align-self: flex-start;
		height: 48px;
	}
`

const SelectBase = styled.select`
	width: 100%;
	height: 100%;
	padding: 18px 24px;

	background: var(--color-elements);
	border: none;
	border-radius: 5px;
	outline-offset: 2px;

	@media ${QUERIES.phoneAndDown} {
		padding: 14px 24px;
		font-size: calc(12 / 16 * 1rem);
	}
`
const Cover = styled.span`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	background: var(--color-elements);
	box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
	border-radius: 5px;
	pointer-events: none;
`

const CoverText = styled.span`
	position: absolute;
	top: 18px;
	left: 24px;
	color: var(--color-text);
	font-size: calc(14 / 16 * 1rem);
	@media ${QUERIES.phoneAndDown} {
		top: 14px;
		font-size: calc(12 / 16 * 1rem);
	}
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
