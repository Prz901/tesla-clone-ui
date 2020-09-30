import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

// Todo Hook do react começa com "Use" na frente
export default function useModal(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } = useContext(
    ModelsContext
  );
  useEffect(
    () =>
      // As vezes faz a sujeira Sujeira
      () => unregisterModel(modelName), //Desfaz a sujeira
    [modelName, unregisterModel]
  );

  const getModel = useCallback(() => getModelByName(modelName), [
    getModelByName,
    modelName,
  ]);

  return { registerModel, getModel };
}
