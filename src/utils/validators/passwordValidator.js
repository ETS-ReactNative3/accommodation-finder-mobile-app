export function passwordValidator(password) {
  if (!password) return "Şifre boş olamaz!";
  if (password.length < 5) return "Şifre en az 5 karakter olmalıdır!";
  return "";
}
