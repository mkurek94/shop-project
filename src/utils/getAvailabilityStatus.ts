export const getAvailabilityStatus = (availability: number) => {
  switch (availability) {
    case 1:
      return "In magazine";
    case 2:
      return "On demand";
    case 3:
      return "Out of stock";
  }
};
