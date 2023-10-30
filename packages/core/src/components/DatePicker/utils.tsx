import { DateRangeProp } from "@core/components/Calendar";
import {
  getFormattedDate,
  getMonthName,
  isDate,
  isSameMonth,
} from "@core/components/Calendar/utils";

export const validateDate = (date: any) => (isDate(date) && date) || new Date();

export const isSameDate = (date1?: Date, date2?: Date) => {
  if (date1 === date2) return true;
  if (!(isDate(date1) && isDate(date2))) return false;

  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const getFormattedDateRange = (
  date: DateRangeProp,
  locale: string,
  rep: Intl.DateTimeFormatOptions["month"] = "short"
) => {
  const { startDate, endDate } = date;
  const monthYear = `${getMonthName(
    startDate,
    locale,
    rep
  )} ${startDate.getFullYear()}`;
  return `${startDate.getDate()} - ${endDate?.getDate()} ${monthYear}`;
};

export const getSingleDateLabel = (date: any, locale?: string) =>
  isDate(date) ? getFormattedDate(date, locale) : "";

export const getRangeDateLabel = (
  { startDate, endDate }: any,
  locale: string
) => {
  if (!(isDate(startDate) && isDate(endDate)))
    return getSingleDateLabel(startDate);

  return isSameMonth(startDate, endDate)
    ? getFormattedDateRange({ startDate, endDate }, locale)
    : `${getFormattedDate(startDate, locale)} - ${getFormattedDate(
        endDate,
        locale
      )}`;
};

export const getDateLabel = (
  date: Date | Partial<DateRangeProp> | undefined,
  rangeMode: boolean,
  locale: string
) =>
  rangeMode
    ? getRangeDateLabel(date as Required<DateRangeProp>, locale)
    : getSingleDateLabel(date, locale);
