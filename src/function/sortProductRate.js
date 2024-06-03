function sortProductRate(a, b) {
  return a?.rating?.rate - b?.rating?.rate;
}

export default sortProductRate;
