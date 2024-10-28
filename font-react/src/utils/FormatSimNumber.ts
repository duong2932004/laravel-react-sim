export const FormatSimNumber = (number: string): string => {
  const formattedNumber = number.replace(/(\d{4})(\d{3})(\d+)/, "$1.$2.$3");
  return formattedNumber;
};
