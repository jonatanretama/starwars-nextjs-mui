export const getSwapiId = (url: string) => {
  return url.split('/').slice(-2, -1)[0];
};

export const getSwapiPageNumber = (url: string) => {
  const regex = /page=(\d+)$/;
  const match = regex.exec(url);
  const pageNumber = match[1];
  return pageNumber;
};

export const getLengthForPagination = (count: number) => {
  if (count) {
    return Math.ceil(count / 10);
  }
  return 10;
};
