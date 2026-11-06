export interface UserAttributes {
  Id: number;
  Name: string;
  Username: string;
  Email: string;
  Password: string;
  KodeReseller?: string | null;
  CreatedAt: Date;
  CreatedBy: string;
  UpdatedAt?: Date | null;
  UpdateBy?: string | null;
  DeletedAt?: Date | null;
  DeletedBy?: string | null;
}
