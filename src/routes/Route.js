import { Route, Redirect } from 'react-router-dom';

export default function RouterWrapper({
	component: Component,
	isPrivate,
	...rest
}) {
	const loading = false;
	const signed = false;

	if (loading) {
		return (
			<div></div>
		)
	}

	if (!signed && isPrivate) {
		return <Redirect to="/" />
	}

	if (signed && !isPrivate) {
		return <Redirect to="/dasboard" />
	}

	return (
		<Route
			{...rest}
			render={props => (
				<Component {...props} />
			)}
		/>
	)
}