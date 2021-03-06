import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import LocalMultiGame from './pages/LocalMultiGame';
import TestGame from './pages/TestGame';

const App: React.FC = () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/test' component={TestGame} />
				<Route exact path='/multi/local' component={LocalMultiGame} />
				<Route component={Error404} />
			</Switch>
		</HashRouter>
	);
};

export default App;
