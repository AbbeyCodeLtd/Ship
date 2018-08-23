import loginRoutes from '../containers/Login';
import homeRoutes from '../containers/Home';
import accountRoutes from '../containers/Account';

const routes = [
	...loginRoutes,
	...homeRoutes,
	...accountRoutes
];

export default routes;
