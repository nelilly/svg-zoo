import { monthLongName } from 'src/shared/functions/monthLongName';

export const formatDate = (timestamp, format) => {
  const date = new Date(timestamp);
  switch (format) {
    case 'short':
      return `${monthLongName[date.getMonth()].substring(0,3)} ${date.getFullYear()}`;
    default:
      return `${monthLongName[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }
};

export default formatDate;
