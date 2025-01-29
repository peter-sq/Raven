import crypto from 'crypto';

export const generateAccountNumber = () => {
  const prefix = "123"; 
  const uniqueNumber = crypto.randomInt(1000000000, 9999999999).toString(); 
  return `${prefix}${uniqueNumber}`;
};
