export const MENU_ITEMS: MenuItems = [
    {
      title: 'Home',
      to: 'root',
      isDropDown: false,
    },
    {
      title: 'About',
      to: '/about',
      isDropDown: false,
    },
    {
      title: 'Contact',
      to: '/contact',
      isDropDown: false,
    },
    {
      title: 'Pages',
      isDropDown: true,
      dropdownItems: [
        { title: 'Home', to: '/', isDropDown: false },
        { title: 'About', to: '/about', isDropDown: false },
        { title: 'Services', to: '/services', isDropDown: false },
        { title: 'Service Details', to: '/service-details', isDropDown: false },
        { title: 'Pricing', to: '/pricing', isDropDown: false },
        { title: 'Team', to: '/team', isDropDown: false },
        { title: 'Blog', to: '/blog', isDropDown: false },
        { title: 'Contact', to: '/contact', isDropDown: false },
        { title: 'FAQs', to: '/faqs', isDropDown: false },
        { title: 'Request a Quote', to: '/request-a-quote', isDropDown: false },
        { title: 'Privacy Policy', to: '/privacy-policy', isDropDown: false },
      ],
    },
];