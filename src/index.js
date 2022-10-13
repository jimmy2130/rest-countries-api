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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

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
					loader={countriesLoader(queryClient)}
					element={<CountryIndex/>}
				/>
				<Route
					path={":cca3"}
					loader={detailLoader(queryClient)}
					element={<CountryDetail/>}
				/>
			</Route>
		</>
	)
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  	<QueryClientProvider client={queryClient}>
  		<RouterProvider router={router}/>
  		<ReactQueryDevtools position="bottom-right" />
  	</QueryClientProvider>
  </React.StrictMode>
);