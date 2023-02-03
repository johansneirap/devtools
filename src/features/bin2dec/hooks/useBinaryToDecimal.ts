import { useState } from "react";
const isValidBinary = (str: string) => !Boolean(str.match(/[^01]/g)?.length);

const convertBinaryToDecimal = (binary: string) => {
  const binaryToDecimal = parseInt(binary, 2);
  return binaryToDecimal.toString();
};

export function useBinaryToDecimal() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [error, setError] = useState("");

  const resetDecimal = () => setDecimal("");

  const binaryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBinary = e.target.value;
    setBinary(newBinary);
    if (!isValidBinary(newBinary))
      return setError("Only type either '1' or '0'");
    setError("");
    resetDecimal();
  };

  const onClick = () => setDecimal(convertBinaryToDecimal(binary));

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isValidBinary(binary)) return;
    if (e.key !== "Enter") return;
    e.preventDefault();
    onClick();
  };

  const isConvertButtonDisabled = () => {
    if (!binary) return true;
    return !isValidBinary(binary);
  };

  return {
    binary,
    decimal,
    binaryInputChange,
    onClick,
    onKeyDown,
    isConvertButtonDisabled,
    error,
  };
}

export default useBinaryToDecimal;
