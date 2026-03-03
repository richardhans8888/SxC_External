export const mrTradivSlides = Array.from({ length: 17 }, (_, i) => {
  const pageNumber = String(i + 1).padStart(4, "0");
  return {
    image: `/mr-tradiv/mr-tradiv_page-${pageNumber}.jpg`,
    alt: `MR Tradiv Slide ${i + 1}`,
  };
});