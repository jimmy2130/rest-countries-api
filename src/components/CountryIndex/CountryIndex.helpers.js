function countriesFilter({name, region, q, filter}) {
	if(!q && !filter)
		return true
	if(!q && filter)
		return region === filter
	if(q && !filter)
		return name.includes(q)
	if(q && filter)
		return name.includes(q) && region === filter
}

export function filteredCountries(countries, {q, filter}) {
	return countries.filter(d => countriesFilter(
		{
			name: d.name.common.toLowerCase(),
			region: d.region,
			q: q?.toLowerCase(),
			filter: filter
		}
	))
}

export function fetchFilteredData({ q, filter }) {
	return fetch('https://restcountries.com/v3.1/all')
		.then(res => res.json())
		.then(countries => filteredCountries(countries, {q, filter}))
}