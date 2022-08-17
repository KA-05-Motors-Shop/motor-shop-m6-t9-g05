export const initalLetters = (name: string | undefined) => {
  let result = "";

  if (name) {
    let token = name.split(/\s/);

    token.forEach((item) => {
      result += item.substring(0, 1).toUpperCase();
    });

    return result;
  }
};
