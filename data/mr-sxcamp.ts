export const mrSxCampSlides = Array.from({ length: 17 }, (_, i) => {
  const pageNumber = String(i + 1).padStart(4, "0");
  return {
    image: `/mr-sxcamp/mr-sxcamp_page-${pageNumber}.jpg`,
    alt: `MR SxCamp Slide ${i + 1}`,
  };
});