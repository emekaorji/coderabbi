import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<div className={'flex-body'}>
			<Nav />
			<div>{children}</div>
			<Footer />
		</div>
	);
}
