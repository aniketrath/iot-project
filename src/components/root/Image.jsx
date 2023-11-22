import React from 'react';

export default function Image({ src, alt = '', rotate = 0 }) {
	return (
		<img
			src={src}
			alt={alt}
			className={`select-none ${
				rotate === 90
					? 'rotate-90'
					: rotate === 180
					? 'rotate-180'
					: rotate === 270
					? 'rotate-270'
					: ''
			}`}
		/>
	);
}
