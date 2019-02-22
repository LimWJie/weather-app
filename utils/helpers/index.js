import moment from "moment";

/**
 * Convert UNIX timestamp into human readable datetime string
 * @param {String} timestamp UNIX timestamp to be formatted
 */
export const formatDate = timestamp =>
  moment(timestamp).format("ddd, D MMM YYYY hh:mm A");
