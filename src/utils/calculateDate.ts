export const calculateDate = (commentDate: string) => {
  const data = new Date(commentDate);
  const actualDate = new Date(Date.now());

  const newDate = `${data.getFullYear()}-${data.getMonth()}-${data.getUTCDate()}`;
  const newDate2 = `${actualDate.getFullYear()}-${actualDate.getMonth()}-${actualDate.getUTCDate()}`;

  const date1 = new Date(newDate);
  const date2 = new Date(newDate2);
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return diffDays
};
