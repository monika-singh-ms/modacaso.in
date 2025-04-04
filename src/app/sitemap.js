const domain = 'https://www.officearray.com';

const urls = [
  `${domain}`,
  `${domain}/our-catalog`,
  `${domain}/brand-story`,
  `${domain}/become-distributor`,
  `${domain}/contact-us`,
  
];

// Set common properties like `lastModified` and `priority` for all URLs
const staticPages = urls.map((url, index) => ({
  url,
  lastModified: new Date(),
  priority: index === 0 ? 1 : 0.8  // First URL gets priority 1, rest get 0.8
}));



// Generate and return sitemap
export default async function sitemap() {

  // Return static pages (add dynamic pages later if fetched)
  return staticPages;
}
