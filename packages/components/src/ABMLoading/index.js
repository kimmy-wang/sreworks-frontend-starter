import React, { Component } from 'react'
import './index.less'

export class ABMLoading extends Component {
  render() {
    const { platformName } = this.props
    return (
      <div className={'abm-pre-screen-loading'}>
        <div className={'abm-pre-screen-loading-center'}>
          <div className={'abm-pre-screen-loading-center-absolute'}>
            <div className={'abm-pre-screen-object abm-pre-screen-object_four'} />
            <div className={'abm-pre-screen-object abm-pre-screen-object_three'} />
            <div className={'abm-pre-screen-object abm-pre-screen-object_two'} />
            <div className={'abm-pre-screen-object abm-pre-screen-object_one'} />
          </div>
          <h1 className={'abm-pre-screen-text'}>
            <span>{platformName}</span>
          </h1>
          <h1 className={'abm-pre-screen-text'}>
            <span>{platformName}</span>
          </h1>
        </div>
      </div>
    )
  }
}
