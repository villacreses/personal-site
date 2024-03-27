const years = 1000 * 60 * 60 * 24 * 365;

export const yearsSince = (datestring: string) => 
  (Date.now() - (new Date(datestring)).getTime()) / years;

export const linkColor = 'text-blue-700 hover:text-blue-900 dark:text-green-300 dark:hover:text-green-500';