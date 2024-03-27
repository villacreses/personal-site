const years = 1000 * 60 * 60 * 24 * 365;

export const yearsSince = (datestring: string) => 
  (Date.now() - (new Date(datestring)).getTime()) / years;

export const linkColor = 'text-green-400 hover:text-green-500';