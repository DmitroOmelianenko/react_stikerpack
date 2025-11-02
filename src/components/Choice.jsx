import React from "react";
import styled from "styled-components";

const ChoiceWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 1.3rem;
  color: #333;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
`;

const Label = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #007bff, #6c63ff);
  color: white;
  padding: 8px 16px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-weight: 600;
  margin-top: 10px;
  transition: transform 0.3s ease;
`;

function Choice({ selected }) {
  return (
    <ChoiceWrapper>
      {selected ? (
        <>
          You chose: <Label>{selected}</Label>
        </>
      ) : (
        "Click on a sticker to choose one 🧩"
      )}
    </ChoiceWrapper>
  );
}

export default Choice;
