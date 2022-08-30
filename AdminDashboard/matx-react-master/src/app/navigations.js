export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'PAGES', type: 'label' },
  {
    name: 'Inventory Management',
    icon: 'security',
    children: [
      { name: 'Product List', iconText: 'SI', path: '/session/signin' },
      { name: 'Order List', iconText: 'SU', path: '/session/signup' },
      { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Error', iconText: '404', path: '/session/404' },
    ],
  },
  { label: 'Components', type: 'label' },
  {
    name: 'Products',
    icon: 'favorite',
    badge: { value: '30+', color: 'secondary' },
    children: [
      { name: 'Add Product', path: '/material/form', iconText: 'F' },
    ],
  },
  {
    name: 'Documentation',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/',
  },
];
