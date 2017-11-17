function updateBuySell(id, amount) {
  return {
    type: 'UPDATEBUYSELL',
    amount,
  };
}

export default updateBuySell;
