import { useRef } from "react";
import "./PinInput.css";

export default function PinInput({ length = 6, onComplete }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }

    const pin = inputsRef.current.map(i => i.value).join("");
    if (pin.length === length && onComplete) onComplete(pin);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="pin-container">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="password"
          maxLength="1"
          className="pin-box"
          ref={el => (inputsRef.current[i] = el)}
          onChange={e => handleChange(e, i)}
          onKeyDown={e => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
}
