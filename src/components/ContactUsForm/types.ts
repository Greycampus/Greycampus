export interface Country {
    id: number;
    country: string;
    code: string;
  }
  
  export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    phone: string;
    company: string;
    department: string;
    message: string;
  }
  
  export interface Errors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
  }
  
  export interface AlertState {
    open: boolean;
    message: string;
    severity: "success" | "error";
  }
  