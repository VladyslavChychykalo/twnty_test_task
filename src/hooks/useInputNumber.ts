import React, { useState } from "react";

interface PropsI {
  maxQuantity: number;
  defaultValue: number;
}

const useInputNumber: React.FC<PropsI> = ({
  maxQuantity,
  defaultValue,
}): any => {
  const [qV, setQV] = useState(defaultValue);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(target.value) > maxQuantity) return;
    setQV(Number(target.value));
  };

  return {
    qV,
    handleChange,
    setQV,
  };
};

export default useInputNumber;
