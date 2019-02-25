import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from 'src/redux';
import theme from 'src/theme'

const Root = () => (
    <ThemeProvider theme={ theme }>
      <StoreProvider store={ store }>
        <div>Test</div>
      </StoreProvider>
    </ThemeProvider>
);

export default Root;
