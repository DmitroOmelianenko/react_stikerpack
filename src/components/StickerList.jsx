import React from "react";
import styled from "styled-components";
import Sticker from "./Sticker";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 20px;
`;

function StickerList({ stickers, selected, onSelect }) {
  return (
    <List>
      {stickers.map((s, i) => (
        <Sticker
          key={i}
          img={s.img}
          label={s.label}
          onSelect={onSelect}
          selected={selected === s.label}
        />
      ))}
    </List>
  );
}

export default StickerList;
