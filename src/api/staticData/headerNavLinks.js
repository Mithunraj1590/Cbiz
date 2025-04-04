const headerNavLinks = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { 
    href: "/works", 
    title: "Works", 
    subMenu: [
      { href: "/works/project1", title: "Project 1" },
      { href: "/works/project2", title: "Project 2" },
      { href: "/works/project3", title: "Project 3" },
    ]
  },
  { href: "/contact", title: "Contact Us" },
];

export default headerNavLinks;
