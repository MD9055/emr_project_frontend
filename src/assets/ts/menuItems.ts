// menu-items.ts

export const menuItems = {
  superAdmin: [
    { label: 'Dashboard', route: '/superadmin/dashboard', icon: 'assets/img/icons/menu-icon-01.svg' },
    { label: 'Admins', route: '/superadmin/admin', icon: 'assets/img/icons/menu-icon-01.svg' },
    { label: 'Physicians', route: '/superadmin/physician', icon: 'assets/img/icons/menu-icon-01.svg' },
    { label: 'Patients', route: '/superadmin/patient', icon: 'assets/img/icons/menu-icon-01.svg' },
    { label: 'Logout', icon: 'assets/img/icons/logout.svg' }
  ],
  admin: [
    { label: 'Dashboard', route: '/admin/dashboard', icon: 'assets/img/icons/menu-icon-01.svg' },
    { label: 'Physicians', route: '/admin/physician', icon: 'assets/img/icons/menu-icon-01.svg' },
    { label: 'Patients', route: '/admin/patient', icon: 'assets/img/icons/menu-icon-01.svg' },
    { label: 'Logout', icon: 'assets/img/icons/logout.svg' }
  ]
};
