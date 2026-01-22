import React from 'react'
import { useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const { message, timestamp } = location.state || {};
	return (
		<div>
			<h1>Detail Page</h1>
			{message && <p>Message: {message}</p>}
			{timestamp && <p>Timestamp: {new Date(timestamp).toLocaleString()}</p>}
		</div>
  );
}
