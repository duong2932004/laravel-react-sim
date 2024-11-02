export const FormatSimNumber = (number?: string): string => {
  if (!number) return "";
  return number.replace(/(\d{4})(\d{3})(\d+)/, "$1.$2.$3");
};
