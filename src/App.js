import React from 'react';

import { Title, TitleSmall } from './styles';

function App() {
  return (
    <div>
      <Title fontSize={20}>
        Hello
        <span> Daniel</span>
      </Title>

      <TitleSmall>Title small</TitleSmall>
    </div>
  );
}

export default App;
