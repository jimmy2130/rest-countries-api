import React from "react";
import styled from 'styled-components/macro';
import { useLoaderData, Link } from "react-router-dom";

export async function countriesLoader() {
	const data = await fetch('https://restcountries.com/v3.1/all').then(res => res.json())
	return data
}

const CountryIndex = () => {
	const data = useLoaderData()
	console.log(data)

  return (
  	<>
	  	<CardWrapper>
	  	{
	  		data.map((country) => (
	  			<Card key={country.name.common}>
	  				<CountryLink to={country.name.common.toLowerCase().split(' ').join('-')}>
	  					<Image src={country.flags.svg} alt={`flag of ${country.name.common}`}/>
	  					<InfoWrapper>
		  					<CountryName>{country.name.official}</CountryName>
		  					<Description>Population: <Value>{country.population.toLocaleString()}</Value></Description>
		  					<Description>Region: <Value>{country.region}</Value></Description>
		  					{country.capital && <Description>Capital: <Value>{country.capital}</Value></Description>}
	  					</InfoWrapper>
	  				</CountryLink>
	  			</Card>
	  		))
	  	}
	  	</CardWrapper>
  	</>
  );
};

const CardWrapper = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
	justify-content: center;
	gap: 75px;
`

const Card = styled.li`
	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
`

const CountryLink = styled(Link)`
	text-decoration: none;
	color: var(--color-light-text);
`

const Image = styled.img`
	display: block;
	width: 100%;
	aspect-ratio: 1.65;
	object-fit: cover;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
`

const InfoWrapper = styled.div`
	padding: 24px;
	height: 176px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	background: var(--color-light-elements);
`

const CountryName = styled.h2`
	margin-bottom: 16px;
	font-size: calc(18 / 16 * 1rem);
	font-weight: 800;
	// overflow hidden so that ellipsis will work
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Description = styled.h3`
	margin-bottom: 8px;
	font-size: calc(14 / 16 * 1rem);
	font-weight: 400;
	line-height: 16px;
`

const Value = styled.span`
	margin-left: 3px;
	font-weight: 300;
`

export default CountryIndex;
