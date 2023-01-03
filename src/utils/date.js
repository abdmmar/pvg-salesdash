export const currentDateFormatter = (date = new Date()) =>
  new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)