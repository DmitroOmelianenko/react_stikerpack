import React from "react";
import styled from "styled-components";
import StickerList from "./components/StickerList";
import Choice from "./components/Choice";
import stickersData from "./data/stickers.json";

const AppWrapper = styled.div`
  padding: 40px 20px;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0eafc, #cfdef3);
  font-family: "Inter", system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #1a1a1a;
  margin-bottom: 25px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 0 #fff;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 700px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "" // зберігаємо вибраний стікер тут, але без useState
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(label) {
    this.setState({ selected: label });
  }

  render() {
    return (
      <AppWrapper>
        <Title>Sticker Selector 🌟</Title>
        <Card>
          <StickerList
            stickers={stickersData}
            onSelect={this.handleSelect}
            selected={this.state.selected}
          />
          <Choice selected={this.state.selected} />
        </Card>
      </AppWrapper>
    );
  }
}

export default App;
