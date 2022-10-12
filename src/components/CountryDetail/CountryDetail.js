import React from "react";
// import styled from 'styled-components/macro';
import { useLoaderData } from 'react-router-dom';

export async function detailLoader({ params }) {
	return params.country
}

const CountryDetail = () => {
	const data = useLoaderData()
  return (
  	<>
  		<div>{data}</div>
  	</>
  );
};

export default CountryDetail;
