import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
`;

const Selected = styled.span`
  padding: 4px 10px;
  border-radius: 6px;
  background: #4c7cff;
  color: white;
`;

function Choice({ selected }) {
  return (
    <Wrapper>
      {selected ? (
        <>
          Ви обрали: <Selected>{selected}</Selected>
        </>
      ) : (
        "Натисніть на стікер, щоб обрати"
      )}
    </Wrapper>
  );
}

export default Choice;
