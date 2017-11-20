import { push } from 'react-router-redux';

export default function goToStock(id) {
  return push(`stocks/${id}`);
}

export function goToUser(id) {
  return push(`/users/${id}`);
}
