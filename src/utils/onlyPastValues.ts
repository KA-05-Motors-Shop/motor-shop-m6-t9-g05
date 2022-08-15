export const getOnlyPastValues = (data: any) => {
  for (const value in data) {
    !data[value] && delete data[value];
  }

  return data;
};
