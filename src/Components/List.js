import React, { Component } from 'react'
import ListItem from './ListItems';

export default class List extends Component {

  

  render() {

       

    return (
      <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      <ListItem features = {this.props.features} selected ={this.props.selected} updateFeature = {this.props.updateFeature} />
    </section>
    )
  }
}
