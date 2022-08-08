export const pageView = (url: string) => {
  // @ts-ignore
  window.gtag('config', process.env.GOOGLE_ANALYTICS_ID, {
    path_url: url,
  });
};
