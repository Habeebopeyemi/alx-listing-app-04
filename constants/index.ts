import { PropertyProps, FooterProps, PolicyProps } from "@/interfaces/index";
import ROOM from "@/public/assets/images/svgs/room.svg";
import { AccommodationTypes } from "@/interfaces/index";
import MANSION from "@/public/assets/images/svgs/mansion.svg";
import COUNTRYSIDE from "@/public/assets/images/svgs/countryside.svg";
import VILLA from "@/public/assets/images/svgs/villa.svg";
import TROPICAL from "@/public/assets/images/svgs/tropical.svg";
import NEW from "@/public/assets/images/svgs/new.svg";
import AMAZINGPOOL from "@/public/assets/images/svgs/amazingpool.svg";
import BEACHHOUSE from "@/public/assets/images/svgs/beachhouse.svg";
import ISLAND from "@/public/assets/images/svgs/island.svg";
import CAMPING from "@/public/assets/images/svgs/camping.svg";
import APARTMENT from "@/public/assets/images/svgs/apartment.svg";
import HOUSE from "@/public/assets/images/svgs/house.svg";
import LAKEFRONT from "@/public/assets/images/svgs/lakefront.svg";
import FARMHOUSE from "@/public/assets/images/svgs/farmhouse.svg";
import TREEHOUSE from "@/public/assets/images/svgs/treehouse.svg";
import CABINS from "@/public/assets/images/svgs/cabins.svg";
import CASTLES from "@/public/assets/images/svgs/castles.svg";

const ASSETPATH = "/assets/images/svgs";
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: `${ASSETPATH}` + "/image1.svg",
    discount: "",
  },
  {
    id: 2,
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: `${ASSETPATH}` + "/image2.svg",
    discount: "30",
  },
  {
    id: 3,
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: `${ASSETPATH}` + "/image3.svg",
    discount: "",
  },
  {
    id: 4,
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: `${ASSETPATH}` + "/image4.svg",
    discount: "15",
  },
  {
    id: 5,
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: `${ASSETPATH}` + "/image5.svg",
    discount: "20",
  },
  {
    id: 6,
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image: `${ASSETPATH}` + "/image6.svg",
    discount: "",
  },
  {
    id: 7,
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: `${ASSETPATH}` + "/image7.svg",
    discount: "10",
  },
  {
    id: 8,
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand",
    },
    rating: 4.8,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6",
    },
    image: `${ASSETPATH}` + "/image8.svg",
    discount: "25",
  },
  {
    id: 9,
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany",
    },
    rating: 4.6,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: `${ASSETPATH}` + "/image9.svg",
    discount: "",
  },
  {
    id: 10,
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada",
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: `${ASSETPATH}` + "/image10.svg",
    discount: "40",
  },
  {
    id: 11,
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy",
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: `${ASSETPATH}` + "/image11.svg",
    discount: "50",
  },
  {
    id: 12,
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia",
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: `${ASSETPATH}` + "/image12.svg",
    discount: "",
  },
  {
    id: 13,
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy",
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: `${ASSETPATH}` + "/image13.svg",
    discount: "35",
  },
  {
    id: 14,
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan",
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2",
    },
    image: `${ASSETPATH}` + "/image14.svg",
    discount: "",
  },
  {
    id: 15,
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania",
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: `${ASSETPATH}` + "/image15.svg",
    discount: "20",
  },
  {
    id: 16,
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK",
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4",
    },
    image: `${ASSETPATH}` + "/image16.svg",
    discount: "25",
  },
  {
    id: 17,
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France",
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image: `${ASSETPATH}` + "/image17.svg",
    discount: "30",
  },
  {
    id: 18,
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland",
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: `${ASSETPATH}` + "/image18.svg",
    discount: "",
  },
  {
    id: 19,
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles",
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10",
    },
    image: `${ASSETPATH}` + "/image19.svg",
    discount: "60",
  },
  {
    id: 20,
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa",
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: `${ASSETPATH}` + "/image20.svg",
    discount: "",
  },
];

export const ACCOMMODATIONCATEGORIES: AccommodationTypes[] = [
  { id: 1, name: "Rooms", image: ROOM },
  { id: 2, name: "Mansion", image: MANSION },
  { id: 3, name: "Countryside", image: COUNTRYSIDE },
  { id: 4, name: "Villa", image: VILLA },
  { id: 5, name: "Tropical", image: TROPICAL },
  { id: 6, name: "New", image: NEW },
  { id: 7, name: "Amazing pool", image: AMAZINGPOOL },
  { id: 8, name: "Beach house", image: BEACHHOUSE },
  { id: 9, name: "Island", image: ISLAND },
  { id: 10, name: "Camping", image: CAMPING },
  { id: 11, name: "Apartment", image: APARTMENT },
  { id: 12, name: "House", image: HOUSE },
  { id: 13, name: "Lakefront", image: LAKEFRONT },
  { id: 14, name: "Farm house", image: FARMHOUSE },
  { id: 15, name: "Tree house", image: TREEHOUSE },
  { id: 16, name: "Cabin", image: CABINS },
  { id: 17, name: "Castles", image: CASTLES },
];

export const FILTERS: string[] = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay later",
  "Self Checkin",
  "Instant Book",
];

export const FooterData: FooterProps[] = [
  {
    title: "Explore",
    description: "",
    links: [
      { name: "Apartments in Dubai", href: "#" },
      { name: "Hotels in New York", href: "#" },
      { name: "Villa in Spain", href: "#" },
      { name: "Mansion in Indonesia", href: "#" },
    ],
  },
  {
    title: "Company",
    description: "",
    links: [
      { name: "About us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Career", href: "#" },
      { name: "Customers", href: "#" },
      { name: "Brand", href: "#" },
    ],
  },
  {
    title: "Help",
    description: "",
    links: [
      { name: "Support", href: "#" },
      { name: "Cancel Booking", href: "#" },
      { name: "Refunds Process", href: "#" },
    ],
  },
];

export const PolicyData: PolicyProps = {
  description:
    "Some hotel requires you to cancel more than 24 hours before check-in. Details here",
  links: [
    { name: "Terms of Service", href: "#" },
    { name: "Policy Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Partners", href: "#" },
  ],
};
