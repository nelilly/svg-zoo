// export const updateUrl = (path) => (path.includes('http') ? path : `${process.env.ASSET_PREFIX}${path}`);
export const updateUrl = (path) => (path.includes('http') ? path : `${process.env.pathPrefix}${path}`);

export default updateUrl;
