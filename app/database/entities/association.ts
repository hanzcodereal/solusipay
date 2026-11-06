import { Produk } from "./produk.entity";
import { Provider } from "./provider.entity";

export const associate = () => {
  Produk.belongsTo(Provider, {
    foreignKey: "kode_provider",
    targetKey: "kode",
    as: "provider",
  });

  Provider.hasMany(Produk, {
    foreignKey: "kode_provider",
    sourceKey: "kode",
    as: "produk",
  });
};
