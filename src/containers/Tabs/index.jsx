import React, { useState } from 'react'
import Tab from '@material-ui/core/Tab'
import { PaperStyled, TabsStyled } from './style'

function Tabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <PaperStyled>
      <TabsStyled
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" disabled />
        <Tab label="Item Three" />
      </TabsStyled>
    </PaperStyled>
  );
}

export default Tabs
