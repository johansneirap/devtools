import { useState } from "react";
import useBinaryToDecimal from "../hooks/useBinaryToDecimal";

export function BinaryToDecimal() {
  const {
    decimal,
    binaryInputChange,
    onClick,
    onKeyDown,
    isConvertButtonDisabled,
    error,
  } = useBinaryToDecimal();

  return (
    <main className="main-container">
      <h2>Binary to Decimal</h2>
      {error && (
        <div className="error">
          <span>{error}</span>
        </div>
      )}
      <section className="input-box">
        <input
          className="input"
          placeholder="Type your binary"
          name="binary"
          onChange={binaryInputChange}
          onKeyDown={onKeyDown}
        />
        <button onClick={onClick} disabled={isConvertButtonDisabled()}>
          Convert
        </button>
      </section>
      <section className="output-box">
        <h2>Output: {decimal}</h2>
      </section>
    </main>
  );
}

export default BinaryToDecimal;
