export interface IApiUserDataLogin {
  login: string;
  password: string;
}

export enum Role {
  Admin,
  User,
  Moderator,
}

export interface IApiUserDataRegistration {
  login: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  consent: boolean;
  role: Role;
}

export interface IApiUserDataRecoverPassword {
  email: string;
}

export interface IApiUserDataResetPassword {
  password: string;
}

export interface IApiUserDataResetPasswordParams {
  token: string;
}

export type CombinedResetPasswordData = {
  data: IApiUserDataResetPassword;
  params: IApiUserDataResetPasswordParams;
};
