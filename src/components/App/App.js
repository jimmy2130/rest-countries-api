import React from "react";
import Header from "../Header"
import styled from 'styled-components/macro';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
  	<>
  		<Header/>
  		<Layout>
  			<Outlet/>
  		</Layout>
  	</>
  );
};

const Layout = styled.main`
	height: 100%;
	padding: 128px 80px 48px 80px;
	background: var(--color-light-background);
`

export default App;
