export const getOffset = (element: HTMLElement | null) => {
  const rect = element?.getBoundingClientRect();
  const scrollTop = window.scrollY;
  return rect!.top + scrollTop - rect!.height;
};
