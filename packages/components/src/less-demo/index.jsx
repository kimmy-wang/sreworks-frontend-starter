import React, { Component } from 'react'
import styles from './index.module.less'

import LessImage from './images/less.png'
import Less from './icons/less.svg'

export default class LessDemo extends Component {
  render() {
    return (
      <div className={styles.title}>
        <img src={LessImage} alt="less" />
        <Less />
      </div>
    )
  }
}
