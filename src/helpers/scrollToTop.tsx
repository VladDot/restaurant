export const scrollToTop = (style: 'auto' | 'smooth' = 'smooth') => {
  window.scrollTo({ top: 0, behavior: style });
};
