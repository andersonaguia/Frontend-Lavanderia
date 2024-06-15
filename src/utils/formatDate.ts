export const formatDate = (date: Date): string => {
  const datetime = new Date(date);
  datetime.setHours(datetime.getHours() + 4);
  const formattedTime = `${String(datetime.getHours()).padStart(
    2,
    "0"
  )}:${String(datetime.getMinutes()).padStart(2, "0")}:${String(
    datetime.getSeconds()
  ).padStart(2, "0")}`;
  return formattedTime;
};

export function parseISOString(dateString: string) {
  const parts = dateString.split("T");
  const datePart = parts[0];
  const timePart = parts[1].substring(0, 8);

  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute, second] = timePart.split(":").map(Number);

  return new Date(Date.UTC(year, month - 1, day, hour, minute, second));
}
