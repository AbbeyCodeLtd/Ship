import loginRoutes from '../containers/Login';
import homeRoutes from '../containers/Home';
import accountRoutes from '../containers/Account';
import crushRoutes from '../containers/Crush';

const routes = [
	...loginRoutes,
	...homeRoutes,
	...accountRoutes,
	...crushRoutes
];

export default routes;
