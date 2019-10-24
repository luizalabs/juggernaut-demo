import React, { useState } from 'react'
import MaterialTabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { PaperStyled } from './style'

function Tabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <PaperStyled>
      <MaterialTabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" disabled />
        <Tab label="Item Three" />
      </MaterialTabs>
    </PaperStyled>
  );
}

export default Tabs
