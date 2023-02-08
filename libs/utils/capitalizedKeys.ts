/* eslint-disable @typescript-eslint/no-explicit-any */

export const capitalizedKeysArr = (arr: any[]) => {
  return Object.keys(arr).map(key => {
    const replacedKey = key.replace('_', ' ');
    const capitalizedKey =
      replacedKey.charAt(0).toUpperCase() + replacedKey.slice(1);
    return {
      key: capitalizedKey,
      value: arr[key as keyof typeof arr],
    };
  });
};
