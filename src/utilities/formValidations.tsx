import strings from './strings';

const EMAIL_REG = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

type LoginFormType = {email: string; password: string};
type LoginReturnType = {
  emailError: string;
  passwordError: string;
  status: boolean;
};

export const loginValidation = ({
  email,
  password,
}: LoginFormType): LoginReturnType => {
  let emailError = '';
  let passwordError = '';
  let validation = true;
  if (email === undefined || email.trim() === '') {
    emailError = strings.login.enterEmail;
    validation = false;
  } else if (EMAIL_REG.test(email) === false) {
    emailError = strings.login.incorrectEmail;
    validation = false;
  }
  if (password === undefined || password.trim() === '') {
    passwordError = strings.login.enterPassword;
    validation = false;
  }
  return {
    emailError: emailError,
    passwordError: passwordError,
    status: validation,
  };
};

type EmailValidateType = {email: string};
type EmailReturnType = {
  emailError: string;
  status: boolean;
};

export const emailValidation = ({
  email,
}: EmailValidateType): EmailReturnType => {
  let emailError = '';
  let validation = true;
  if (email === undefined || email.trim() === '') {
    emailError = strings.login.enterEmail;
    validation = false;
  } else if (EMAIL_REG.test(email) === false) {
    emailError = strings.login.incorrectEmail;
    validation = false;
  }
  return {
    emailError: emailError,
    status: validation,
  };
};
