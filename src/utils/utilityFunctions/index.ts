export const getOffset = (element: HTMLElement | null) => {
  const rect = element?.getBoundingClientRect();
  const scrollTop = window.scrollY;

  return rect!.top + scrollTop + rect!.height;
};

export const renderLinksUrl = (link: string) => {
  switch (link) {
    case 'Home':
      return '';
    default:
      return link.toLowerCase();
  }
};
