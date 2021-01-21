import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class TabGroup extends Component {


  render() {
    const { tabitmes } = this.props


    const titleArr = tabitmes.map((item, idx) => {
      return <Tab key={idx}>{item.name}</Tab>
    })

    const panelArr = tabitmes.map((item, idx) => {
      return <TabPanel key={idx}><h2>{item.panel}</h2></TabPanel>
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
