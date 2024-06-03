 function sortProductDate(a, b) {
    const currentDate = new Date();
    const dateB = new Date(b.dateReleases);
    return dateB - currentDate;
  }

  export default sortProductDate