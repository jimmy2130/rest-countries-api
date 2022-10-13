export function findCountry(countries, target) {
	return countries.find(c => c.cca3 === target)
}

export function findBorders(countries, cca3Arr) {
	return cca3Arr.map(c => {
		let found = countries.find(country => country.cca3 === c)
		return {name: found?.name.common, cca3: found?.cca3}
	})
}