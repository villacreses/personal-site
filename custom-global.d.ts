// Utility types
type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Entity types

