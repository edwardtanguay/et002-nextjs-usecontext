'use client';

import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';

function Header() {
	const activeSegment = useSelectedLayoutSegment();

	return (
		<>
			<h1 className="text-yellow-400 text-3xl font-bold mt-4 mb-4">
				Info Site
			</h1>
			<nav className="bg-neutral-800 py-1 px-2 mb-4">
				<Link
					href="/"
					className={`mr-3 ${activeSegment === null ? 'active' : ''}`}
				>
					Welcome
				</Link>
				<Link
					href="/info"
					className={`mr-3 ${
						activeSegment === 'info' ? 'active' : ''
					}`}
				>
					Info
				</Link>
				<Link
					href="/about"
					className={`mr-3 ${
						activeSegment === 'about' ? 'active' : ''
					}`}
				>
					About
				</Link>
			</nav>
		</>
	);
}

export default Header;
