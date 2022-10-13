import React, { useEffect } from "react";
import styled from 'styled-components/macro';
import {
	useSearchParams,
	useLoaderData,
	defer,
	Form,
	Await
} from "react-router-dom";
import {
	filteredCountries,
	fetchFilteredData,
} from './CountryIndex.helpers'
import { fetchData } from '../../helpers/fetch-data.helpers'
import Card from '../Card'
import Search from '../Search'
import Select from '../Select'

export function countriesLoader(queryClient) {
	return async function fetchCountries({ request }) {
		const url = new URL(request.url)
		const q = url.searchParams.get("q")
		const filter = url.searchParams.get("filter")

		if(!queryClient.getQueryData(["countries"])) {
			const countriesPromise = fetchFilteredData({q, filter})
			queryClient.prefetchQuery(["countries"], fetchData)
			return defer({countries: countriesPromise})
		}
		return {
			countries: filteredCountries(
				queryClient.getQueryData(["countries"]),
				{q, filter}
			)
		}
	}
}

const CountryIndex = () => {
	const [searchParams] = useSearchParams()
	const q = searchParams.get("q")
	const filter = searchParams.get("filter")
	const data = useLoaderData()

	useEffect(() => {
		document.getElementById("search").value = q
		document.getElementById("filter").value = filter || ""
	}, [q, filter])

  return (
  	<Wrapper>
  		<UserInput>
  			<Search q={q}/>
  			<Select/>
  		</UserInput>
  		<React.Suspense fallback={<p>loading...</p>}>
  			<Await
  				resolve={data.countries}
  				errorElement={<p>Error loading countries</p>}
  			>
  				{
  					(countries) => {
  						return (
						  	<CardsGrid>
						  	{
						  		countries?.map((country) => (
						  			<React.Fragment key={country.name.common}>
						  				<Card country={country}/>
						  			</React.Fragment>
						  		))
						  	}
						  	</CardsGrid>
					  	)
  					}
  				}
  			</Await>
  		</React.Suspense>
  	</Wrapper>
  );
};

const Wrapper = styled.main`
	padding: 128px 80px 48px 80px;
	background: var(--color-light-background);
`

const UserInput = styled(Form)`
	display: flex;
	justify-content: space-between;
	margin-bottom: 48px;
`

const CardsGrid = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
	justify-content: center;
	gap: 75px;
`

export default CountryIndex;
