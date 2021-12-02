export const invoiceNumberGenerator = (buyerFullName: string): string => {
  const date = new Date();

  const year = date.getFullYear().toString();

  let month = (date.getMonth() + 1).toString();
  month = month.length === 1 ? `0${month}` : month;

  let day = date.getDate().toString();
  day = day.length === 1 ? `0${day}` : day;

  let hour = date.getHours().toString();
  hour = hour.length === 1 ? `0${hour}` : hour;

  let minute = date.getMinutes().toString();
  minute = minute.length === 1 ? `0${minute}` : minute;

  let second = date.getSeconds().toLocaleString();
  second = second.length === 1 ? `0${second}` : second;

  return `${year}${month}${day}-${hour}${minute}${second}/${buyerFullName.replaceAll(
    ' ',
    ''
  )}`;
};
