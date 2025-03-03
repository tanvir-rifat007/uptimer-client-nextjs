import { Dispatch, SetStateAction } from "react";
import { INotification } from "./notification.interface";
import { LoginType, RegisterType } from "@/validators/auth";

export interface InitialUpdateType {
  notifications: INotification[];
  user: IUser | null;
}

export interface IUser {
  __typename?: string;
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
}

export interface IUserAuth {
  loading: boolean;
  validationErrors?: RegisterType | LoginType;
  setValidationErrors?: Dispatch<SetStateAction<RegisterType | LoginType>>;
  onRegisterSubmit?: (formData: FormData) => void;
  onLoginSubmit?: (formData: FormData) => void;
  authWithGoogle?: (formData: FormData) => Promise<void>;
  authWithFacebook?: (formData: FormData) => Promise<void>;
}
