import {
  Blog1,
  Blog11,
  Cart1,
  Category1,
  Category2,
  Category3,
  Product5,
  Product6,
  Product7,
  Product8,
  ProductSide,
  ProductSide1,
  ProductSide2,
} from '../assets/images';
import { CiTrophy } from 'react-icons/ci';
import {
  FaRegCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStopwatch,
} from 'react-icons/fa';
import { MdOutlineLocalShipping, MdOutlineSupportAgent } from 'react-icons/md';

export const navLinks = [
  { href: '', label: 'Home' },
  { href: 'shop', label: 'Shop' },
  { href: 'blog', label: 'Blog' },
  { href: 'contact', label: 'Contact' },
];

export const navLinks2 = [
  { href: '', label: 'Home' },
  { href: 'shop', label: 'Shop' },
  { href: 'blog', label: 'Blog' },
  { href: 'contact', label: 'Contact' },
];

export const navLinks3 = [
  { href: '', label: 'Payment Options' },
  { href: '', label: 'Returns' },
  { href: '', label: 'Privacy Policies' },
];

export const categories = [
  { href: 'home', label: 'Dining', image: Category1, url: '/shop' },
  { href: 'shop', label: 'Living', image: Category2, url: '/shop' },
  { href: 'about', label: 'Bedroom', image: Category3, url: '/shop' },
];

export const features = [
  {
    label: 'High Quality',
    description: 'crafted from top materials',
    icon: CiTrophy,
  },
  {
    label: 'Warranty Protection',
    description: 'Over 2 years',
    icon: FaRegCheckCircle,
  },
  {
    label: 'Free Shipping',
    description: 'Order over 150 $',
    icon: MdOutlineLocalShipping,
  },
  {
    label: '24 / 7 Support',
    description: 'Dedicated support',
    icon: MdOutlineSupportAgent,
  },
];

export const contact = [
  {
    label: 'Address',
    description: '236 5th SE Avenue, New York NY10000, United States',
    icon: FaMapMarkerAlt,
  },
  {
    label: 'Phone',
    description: 'Mobile: +(84) 546-6789 Hotline: +(84) 456-6789',
    icon: FaPhoneAlt,
  },
  {
    label: 'Working Time',
    description: 'Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00',
    icon: FaStopwatch,
  },
];

export const furniture = [
  {
    thumbnail: ProductSide,
    bigProduct: ProductSide,
  },
  {
    thumbnail: ProductSide1,
    bigProduct: ProductSide1,
  },
  {
    thumbnail: ProductSide2,
    bigProduct: ProductSide2,
  },
];

export const blog = [
  {
    id: 1,
    image: Blog1,
    title: 'Going all-in with millennial design',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    category: 'Wood',
    date: '14 Oct 2022',
    author: 'Admin',
  },
  {
    id: 1,
    image: Blog1,
    title: 'Going all-in with millennial design',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    category: 'Wood',
    date: '14 Oct 2022',
    author: 'Admin',
  },
];

export const recentPosts = [
  {
    id: 1,
    title: 'Going all-in with millennial design',
    date: '03 Aug 2022',
    image: Blog11,
  },
  {
    id: 1,
    title: 'Going all-in with millennial design',
    date: '03 Aug 2022',
    image: Blog11,
  },
  {
    id: 1,
    title: 'Going all-in with millennial design',
    date: '03 Aug 2022',
    image: Blog11,
  },
];

export const blogCategory = [
  {
    id: 1,
    title: 'Wood',
    count: 5,
  },
  {
    id: 1,
    title: 'Wood',
    count: 5,
  },
  {
    id: 1,
    title: 'Wood',
    count: 5,
  },
];

export const products = [
  {
    id: 1,
    name: 'Grifo 1',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product5,
  },
  {
    id: 2,
    name: 'Grifo 2',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product6,
  },
  {
    id: 3,
    name: 'Grifo 3',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product7,
  },
  {
    id: 4,
    name: 'Grifo 4',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product8,
  },
  {
    id: 5,
    name: 'Grifo 5',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product5,
  },
  {
    id: 6,
    name: 'Grifo 6',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product6,
  },
  {
    id: 7,
    name: 'Grifo 7',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product7,
  },
  {
    id: 8,
    name: 'Grifo 8',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product8,
  },
  {
    id: 1,
    name: 'Grifo',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product5,
  },
  {
    id: 2,
    name: 'Grifo',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product6,
  },
  {
    id: 3,
    name: 'Grifo',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product7,
  },
  {
    id: 4,
    name: 'Grifo',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product8,
  },
  {
    id: 5,
    name: 'Grifo',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product5,
  },
  {
    id: 6,
    name: 'Grifo',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product6,
  },
  {
    id: 7,
    name: 'Grifo',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product7,
  },
  {
    id: 8,
    name: 'Grifo',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Product8,
  },
];

export const cartItems = [
  {
    name: 'Asguard sofa',
    price: 250000,
    quantity: 2,
    image: Cart1,
  },
];

export const cartItems1 = [
  {
    name: 'Asguard sofa',
    price: 250000,
    quantity: 2,
    image: Cart1,
  },
  {
    name: 'Asguard sofa',
    price: 250000,
    quantity: 2,
    image: Cart1,
  },
  {
    name: 'Asguard sofa',
    price: 250000,
    quantity: 2,
    image: Cart1,
  },
  {
    name: 'Asguard sofa',
    price: 250000,
    quantity: 2,
    image: Cart1,
  },
  {
    name: 'Asguard sofa',
    price: 250000,
    quantity: 2,
    image: Cart1,
  },
  {
    name: 'Asguard sofa',
    price: 250000,
    quantity: 2,
    image: Cart1,
  },
];
