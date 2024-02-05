export const formatDateToString = (dateObject: Date) => {
  // Проверка на входной параметр
  if (!(dateObject instanceof Date)) {
    return 'дд.мм.рррр';
  }

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1; //
  const year = dateObject.getFullYear();

  const formattedDate = `${day}.${month < 10 ? '0' : ''}${month}.${day < 10 ? '0' : ''}${year}`;

  return formattedDate;
};
