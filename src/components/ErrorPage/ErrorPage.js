import React from "react";
import Header from '../Header';
import styled from 'styled-components/macro';

const ErrorPage = () => {
  return (
		<>
			<Header/>
				<MessageWrapper>
					<Message>Sorry, there is nothing here.</Message>
				</MessageWrapper>
		</>
  )
};

const MessageWrapper = styled.main`
	display: grid;
	place-content: center;
	height: 100%;
	background: var(--color-background);
`

const Message = styled.p`
	font-size: calc(20 / 16 * 1rem);
	color: var(--color-text);
`

export default ErrorPage;
