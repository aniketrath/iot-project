import React from 'react';

export default function Box({ children, className = '', horizontal = false }) {
	if (horizontal) {
		return <div className={`flex flex-row ${className}`}>{children}</div>;
	}

	return <div className={`flex flex-col ${className}`}>{children}</div>;
}
