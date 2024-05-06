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
  password: string;
  consent: boolean;
  role: Role;
}
