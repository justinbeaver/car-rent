export const getAdjacentPages = ({ current, last, adjacent = 1 }) => {
  if (current > last) {
    console.warn("Current page must be less than last page");
  }

  const pages = [];

  pages.push(current);

  for (let i = 1; i <= adjacent; i++) {
    if (current - i >= 1) {
      pages.unshift(current - i);
    }
    if (current + i <= last) {
      pages.push(current + i);
    }
  }

  // for (let i = 1; i <= adjacent; i++) {
  //   if (current + i <= last) {
  //     pages.push(current + i);
  //   }
  // }

  const pagesToReturn = 1 + adjacent * 2;

  if (pages.length === pagesToReturn) {
    return pages;
  }

  const remainingPages = pagesToReturn - pages.length;

  for (let i = 0; i < remainingPages; i++) {
    if (pages[pages.length - 1] + 1 <= last) {
      pages.push(pages[pages.length - 1] + 1);
    }
    if (pages[0] - 1 >= 1) {
      pages.unshift(pages[0] - 1);
    }
  }

  // for (let i = 0; i < remainingPages; i++) {
  //   if (pages[0] - 1 >= 1) {
  //     pages.unshift(pages[0] - 1);
  //   }
  // }

  return pages;
};
