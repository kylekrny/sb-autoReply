import App from '../App';
import NotFound from '../pages/NotFound';

const routerConfig = [
  {
    path: '/',
    element: <App />,
  },
  //   {
  //     path: '/auth/',
  //     element: <Auth />,
  //     children: [
  //       {
  //         path: 'login',
  //         action: loginAction,
  //         element: <Login />,
  //       },
  //       {
  //         path: 'register',
  //         action: registerAction,
  //         element: <Register />,
  //       },
  //       {
  //         path: 'forgot',
  //         action: forgotPasswordAction,
  //         element: <ForgotPassword />,
  //       },
  //       {
  //         path: 'verify',
  //         element: <Verify />,
  //       },
  //     ],
  //   },
  //   {
  //     path: '/dashboard',
  //     element: <Forms />,
  //   },
  //   {
  //     path: '/dashboard/integrations',
  //     element: <Integrations />,
  //   },
  //   {
  //     path: '/dashboard/team',
  //     element: <Team />,
  //   },
  //   {
  //     path: '/dashboard/settings',
  //     element: <Settings />,
  //   },
  //   {
  //     path: '/form/create',
  //     element: <Create />,
  //   },
  {
    path: '*',
    element: <NotFound />,
  },
  //   { path: '/privacy', element: <Privacy /> },
  //   { path: '/terms', element: <Terms /> },
  //   { path: '/license', element: <License /> },
  //   { path: '/help', element: <Help /> },
  //   { path: '/blog', element: <Blog /> },
];

export default routerConfig;
