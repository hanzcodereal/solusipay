import { DataTypes, Model } from "sequelize";
import sequelize from "../../../lib/sequelize";
import { UserAttributes } from "../attributes";

class Users extends Model<UserAttributes> implements UserAttributes {
  public Id!: number;
  public Name!: string;
  public Username!: string;
  public Email!: string;
  public Password!: string;
  public KodeReseller!: string | null;
  public CreatedAt!: Date;
  public CreatedBy!: string;
  public UpdatedAt!: Date | null;
  public UpdateBy!: string | null;
  public DeletedAt!: Date | null;
  public DeletedBy!: string | null;
}

Users.init(
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    KodeReseller: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    CreatedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    UpdateBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DeletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DeletedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: false, // Assuming the table doesn't have createdAt/updatedAt
  },
);

export { Users };
