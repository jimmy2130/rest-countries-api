import React from "react";
import styled from 'styled-components/macro';
import { useLoaderData, Link } from 'react-router-dom';
import { ArrowLeft } from '../../svg'
import { findCountry, findBorders } from './CountryDetail.helpers'
import { fetchData } from '../../helpers/fetch-data.helpers'

export function detailLoader(queryClient) {
	return async function fetchDetail({ params }) {
		const { cca3 } = params
		let detail = []
		let borders = []

		if(queryClient.getQueryData(["countries", cca3])) {
			return queryClient.getQueryData(["countries", cca3])
		}

		if(queryClient.getQueryData(["countries"])) {
			detail = [findCountry(queryClient.getQueryData(["countries"]), cca3.toUpperCase())]
			// console.log('if', detail)
		}
		else {
			// console.log('fire')
			detail = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`).then(res => res.json())
		}

		if(detail[0].borders) {
			if(queryClient.getQueryData(["countries"])) {
				borders = findBorders(queryClient.getQueryData(["countries"]), detail[0].borders)
			}
			else {
				borders = await Promise.all(
					detail[0].borders.map(async c => await fetch(`https://restcountries.com/v3.1/alpha/${c}`).then(res => res.json()))
				).then(values => values.map(v => ({name: v[0].name.common, cca3: v[0].cca3})).sort())
			}
		}
		// console.log(borders)

		queryClient.setQueryData(["countries", cca3], {detail, borders})
		queryClient.prefetchQuery(["countries"], fetchData)

		return {detail, borders}
	}
}

const CountryDetail = () => {
	const {detail: data, borders} = useLoaderData()
	// console.log(borders)
	const leftCol = {
		'Native Name:': Object.values(data[0].name.nativeName).map(n => n.common).join(', '),
		'Population:': data[0].population.toLocaleString(),
		'Region:': data[0].region,
		'Sub Region:': data[0].subregion,
		'Capital:': data[0].capital.join(', '),
	}
	const rightCol = {
		'Top Level Domain:': data[0].tld.join(', '),
		'Currencies:': Object.values(data[0].currencies).map(c => c.name).sort().join(', '),
		'Languages:': Object.values(data[0].languages).sort().join(', ')
	}
  return (
  	<Wrapper>
  		<BackLink to="/">
  			<ArrowLeft/>
  			<BackLinkText>Back</BackLinkText>
  		</BackLink>
  		<ContentWrapper>
  			<FlagWrapper>
	  			<Flag src={data[0].flags.svg} alt={`flag of ${data[0].name.common}`}/>
  			</FlagWrapper>
  			<Content>
		  		<Title>{data[0].name.common}</Title>
		  		<ColGroup>
			  		<Column>
			  		{
			  			Object.keys(leftCol).map(l => leftCol[l] && <Info key={l}>{l}<Value>{` ${leftCol[l]}`}</Value></Info>)
			  		}
			  		</Column>
			  		<Column>
			  		{
			  			Object.keys(rightCol).map(r => rightCol[r] && <Info key={r}>{r}<Value>{` ${rightCol[r]}`}</Value></Info>)
			  		}
			  		</Column>
		  		</ColGroup>
		  		<BorderGroup>
		  			{borders.length > 0 && <Label>Border Countries:</Label>}
		  			<LinkGroup>
		  			{
		  				 borders.map(c => <StyledLink to={`/${c.cca3.toLowerCase()}`} key={c.cca3}>{c.name}</StyledLink>)
		  			}
		  			</LinkGroup>
		  		</BorderGroup>
  			</Content>
  		</ContentWrapper>
  	</Wrapper>
  );
};

const Wrapper = styled.main`
	padding: 160px 80px 48px 80px;
	background: var(--color-light-background);
`

const BackLink = styled(Link)`
	width: 136px;
	height: 40px;
	margin-bottom: 64px;
	background: var(--color-light-elements);
	text-decoration: none;
	box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
`

const BackLinkText = styled.span`
	font-size: calc(14 / 16 * 1rem);
	font-weight: 300;
	color: var(--color-light-text);
`

const ContentWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 52px;
`

const FlagWrapper = styled.div`
	max-width: 560px;
	flex: 1;
`

const Flag = styled.img`
	display: block;
	width: 100%;
	// aspect-ratio: 1.4;
	// object-fit: cover;
	border-radius: 10px;
`

const Content = styled.div`
	flex-basis: 574px;
`

const Title = styled.h2`
	font-size: calc(32 / 16 * 1rem);
	color: var(--color-light-text);
	font-weight: 800;
	margin-bottom: 24px;
`

const ColGroup = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 68px;
`

const Column = styled.ul`
	font-size: calc(16 / 16 * 1rem);
`

const Info = styled.li`
	font-weight: 600;
	color: var(--color-light-text);
	line-height: 32px;
`

const Value = styled.span`
	font-weight: 300;
`

const BorderGroup = styled.div`
	display: flex;
	align-items: baseline;
	gap: 15px;
`

const Label = styled.div`
	min-width: max-content;
	font-size: calc(16 / 16 * 1rem);
	font-weight: 600;
	color: var(--color-light-text);
`

const LinkGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`

const StyledLink = styled(Link)`
	min-width: 96px;
	height: 28px;
	padding-left: 8px;
	padding-right: 8px;
	display: grid;
	place-content: center;
	background: var(--color-light-elements);
	box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
	border-radius: 2px;
	font-size: calc(14 / 16 * 1rem);
	font-weight: 300;
	color: var(--color-light-text);
	text-decoration: none;
`

export default CountryDetail;
