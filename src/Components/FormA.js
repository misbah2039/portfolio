// Example Form Component in React
import React, { useState } from "react";

const ExampleForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <form>
      {step === 1 && (
        <>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={handlePrev}>
            Previous
          </button>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </>
      )}
      {step === 3 && (
        <>
          <label>
            Occupation:
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={handlePrev}>
            Previous
          </button>
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};

export default ExampleForm;
