
export interface Project {
    id: string;
    name: string;
    title?: string;
    description?: string;
    status?: 'pending' | 'in-progress' | 'completed';
    managerId?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface User {
    id: string;
    name: string;
    role: 'admin' | 'manager' | 'operator';
    email: string;
  }
  