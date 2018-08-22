import loginRoutes from '../containers/Login';
import homeRoutes from '../containers/Home';

const routes = [
	...loginRoutes,
	...homeRoutes
];

export default routes;
