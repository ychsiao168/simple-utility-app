import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class TabGroup extends Component {


  render() {
    const { tabitmes } = this.props

    const titleArr = tabitmes.map((item, idx) => {
      return <Tab style={{ "background": item.bgcolor }} key={idx}>{item.name}</Tab>
    })

    const panelArr = tabitmes.map((item, idx) => {
      return <TabPanel key={idx}>{item.panel}</TabPanel>
    })

    return (
      < Tabs defaultIndex={0} >
        <TabList>
          {titleArr}
        </TabList>

        {panelArr}
      </Tabs >
    )
  }


}

export default TabGroup
