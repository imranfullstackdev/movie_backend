import bcrypt from 'bcryptjs';

export async function hash(password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}

export function compare(password, hashedPassword) {
  const comparedPassword = bcrypt.compare(password, hashedPassword);
  return comparedPassword;
}
