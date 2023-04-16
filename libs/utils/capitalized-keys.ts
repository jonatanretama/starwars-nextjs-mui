export const capitalizedKeysArr = (data: object) => {
  return Object.keys(data).map(key => {
    const replacedKey = key.replace('_', ' ');
    const capitalizedKey =
      replacedKey.charAt(0).toUpperCase() + replacedKey.slice(1);
    return {
      keyName: capitalizedKey,
      value: data[key as keyof typeof data],
    };
  });
};
