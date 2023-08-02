export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: "fa-solid fa-house-user"
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: "fa-solid fa-circle-info"
  },
 
 
  {
    title: "Search",
    url: "/service",
    cName: "nav-links",
    icon: "fa-solid fa-magnifying-glass"
  },
  {
    title: "Favorites",
    cName: "nav-links",
    icon: "fa-solid fa-star",
    onClick: "handleFavoritesClick",
    dropdown: true,
  },
  {
    title: "Sign Up",
    url: "/home",
    cName: "nav-links-mobile"
  }
];
