import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import CountryIndex, { countriesLoader } from './components/CountryIndex'
import CountryDetail, { detailLoader } from './components/CountryDetail'
import GlobalStyles from './components/GlobalStyles'
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				element={
					<>
						<App/>
						<GlobalStyles/>
					</>
				}
			>
				<Route
					index
					loader={countriesLoader}
					element={<CountryIndex/>}
				/>
				<Route
					path={":country"}
					loader={detailLoader}
					element={<CountryDetail/>}
				/>
			</Route>
		</>
	)
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  	<RouterProvider router={router}/>
  </React.StrictMode>
);