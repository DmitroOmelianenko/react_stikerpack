import React from "react";
import styled, { css } from "styled-components";

const StickerWrapper = styled.div`
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  background: linear-gradient(145deg, #fefefe, #f3f3f3);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }

  ${({ selected }) =>
    selected &&
    css`
      transform: scale(1.05);
      box-shadow: 0 0 0 3px #007bff44, 0 8px 20px rgba(0, 0, 0, 0.15);
    `}
`;

const StickerImage = styled.img`
  display: block;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 16px;
  transition: opacity 0.3s ease;
`;

function Sticker({ img, label, onSelect, selected }) {
  return (
    <StickerWrapper onClick={() => onSelect(label)} selected={selected}>
      <StickerImage src={img} alt={label} />
    </StickerWrapper>
  );
}

export default Sticker;
