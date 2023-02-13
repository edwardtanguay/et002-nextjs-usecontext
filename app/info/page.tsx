'use client';

import React from 'react';
import Header from '../../components/Header';
import { useContext } from 'react';
import { AppContext } from '../../components/AppContext';

function Info() {
	const { siteTitle } = useContext(AppContext);

	return (
		<>
			<p> This is the info page for the site "{siteTitle}".</p>
		</>
	);
}

export default Info;
