export interface NavLink {
  id: number;
  title: string;
  description?: string;
  url: string;
  isDropdown?: boolean;
}

export const dropdownNavs: NavLink[] = [
  {
    id: 1,
    title: "Corporate Limo Service",
    description: "Corporate Limo Service in Martha’s Vineyard",
    url: "/services/coorporate-limo-service",
  },
  {
    id: 2,
    title: "Airport Limo Service",
    description: "Martha’s Vineyard Airport, Bradley, Logan, JFK, La Guardia",
    url: "/services/airport-limo-service",
  },
  {
    id: 3,
    title: "Special Occasion Limo Service",
    description: "Special Occasion Limo Service in Martha’s Vineyard",
    url: "/services/special-occasion-limo-service",
  },
  {
    id: 4,
    title: "Port Limo Service",
    description: "Port Limo Service Oak Bluff’s and Vineyard Haven",
    url: "/services/port-limo-service-oak-bluff’s-and-vineyard-haven",
  },
  {
    id: 5,
    title: "Sightseeing Limo Service",
    description: "Sightseeing Limo Service in Martha’s Vineyard",
    url: "/services/sightseeing-limo-service",
  },
  {
    id: 6,
    title: "Out of Island Rides",
    description: "Out of Martha’s Vineyard Rides",
    url: "/services/out-of-island-rides",
  },
];

export const navbarLinks: NavLink[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
    isDropdown: false,
  },
  {
    id: 2,
    title: "About",
    url: "/about",
    isDropdown: false,
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
    isDropdown: false,
  },
  {
    id: 4,
    title: "Services",
    url: "/",
    isDropdown: true,
  },
  {
    id: 5,
    title: "Book",
    url: "/book",
    isDropdown: false,
  },
  {
    id: 6,
    title: "Fleet",
    url: "/fleet",
    isDropdown: false,
  },
];
