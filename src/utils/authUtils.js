// TODO make this legit lol
export const validateEmailPassword = (email, password) => {
  if (password.length < 6) {
    return "Password should be at least 6 long";
  }

  return false;
};
