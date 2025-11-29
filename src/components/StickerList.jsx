import React from "react";
import styled from "styled-components";
import Sticker from "./Sticker";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

function StickerList({ stickers, selected, onSelect }) {
  return (
    <Grid>
      {stickers.map((s, i) => (
        <Sticker
          key={i}
          img={s.img}
          label={s.label}
          onSelect={onSelect}
          active={selected === s.label}
        />
      ))}
    </Grid>
  );
}

export default StickerList;
