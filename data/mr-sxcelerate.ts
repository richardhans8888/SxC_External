export const mrSxcelerateSlides = Array.from({ length: 17 }, (_, i) => {
  const pageNumber = String(i + 1).padStart(4, "0");
  return {
    image: `/mr-sxcelerate/mr-sxcelerate_page-${pageNumber}.jpg`,
    alt: `MR Sxcelerate Slide ${i + 1}`,
  };
});