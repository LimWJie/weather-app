import moment from "moment";

/**
 * Convert UNIX timestamp in seconds into human readable datetime string
 * @param {String} timestamp UNIX timestamp in seconds to be formatted
 */
export const formatDate = timestamp =>
  moment.unix(timestamp).format("ddd, D MMM YYYY hh:mm A");
