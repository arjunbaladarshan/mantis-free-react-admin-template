import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import FacultyList from '../pages/faculty/faculty-list';
import StudentList from '../pages/student/student-list';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - color
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'sampale-page',
      element: <SamplePage />
    },
    {
      path: 'faculty-list',
      element: <FacultyList />
    },
    {
      path: 'student-list',
      element: <StudentList />
    }
  ]
};

export default MainRoutes;
