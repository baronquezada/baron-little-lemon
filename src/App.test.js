import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './components/Home';
import Booking from './components/Booking';
import Profile from './components/Profile';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders Home Banner', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reserve a table/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Home Banner', () => {
  render(<App />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Home Banner', () => {
  render(<App />);
  const linkElement = screen.getByText(/Chicago/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Home Banner', () => {
  render(<App />);
  const linkElement = screen.getByText(/ORDER for DELIVERY!/i);
  expect(linkElement).toBeInTheDocument();
});