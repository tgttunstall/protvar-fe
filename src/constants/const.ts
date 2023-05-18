export const API_URL = process.env.REACT_APP_API_BASE_URL;
export const NO_OF_ITEMS_PER_PAGE = 25;
export const MAX_IN_PLACE_DOWNLOAD_WITHOUT_EMAIL = 25;
export const G2P_MAPPING_URI = `${API_URL}/mappings`;
export const DOWNLOAD_URI = `${API_URL}/download/stream`;
export const EMAIL_URI = `${API_URL}/email/process`;
export const API_HEADERS = { "Content-Type": "application/json", Accept: "*" };
export const DOWNLOAD_STATUS=`${API_URL}/download/status`;
export const LOCAL_DOWNLOADS='PV_downloads';
export const DISMISS_BANNER = 'PV_banner';