export const getOnlyPastValues = (data: any) => {
  const {published} = data

  for (const value in data) {
    if (!published) {
      data.published = false
    }
    !data[value] && delete data[value];

  }
  return data;
};
