export interface AuthState {
  email: string;
  loading: boolean;
  error: string | null;
}

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName?: string;
}
