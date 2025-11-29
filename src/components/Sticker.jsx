import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid transparent;
  transition: 0.2s;

  ${({ active }) =>
    active &&
    css`
      border-color: #4c7cff;
      background: #eef2ff;
    `}
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

function Sticker({ img, label, onSelect, active }) {
  return (
    <Box onClick={() => onSelect(label)} active={active}>
      <Img src={img} alt={label} />
    </Box>
  );
}

export default Sticker;
