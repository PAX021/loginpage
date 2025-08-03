export const validatePhone = (phone: string): { valid: boolean; message?: string } => {
  const regex = /^09\d{9}$/;
  if (!phone) return { valid: false, message: "وارد کردن شماره تلفن الزامی است." };
  if (!regex.test(phone)) return { valid: false, message: "شماره تلفن نامعتبر است." };
  return { valid: true };
};
