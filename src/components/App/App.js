import React from "react";
import Header from "../Header"
import styled from 'styled-components/macro';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
  	<Wrapper>
	  	<Header/>
  		<MaxWidthWrapper>
	  		<Outlet/>
  		</MaxWidthWrapper>
  	</Wrapper>
  );
};

const Wrapper = styled.div`
	height: 100%;
	background: var(--color-background);
`

const MaxWidthWrapper = styled.div`
	max-width: 1600px;
	margin-left: auto;
	margin-right: auto;
`

export default App;
