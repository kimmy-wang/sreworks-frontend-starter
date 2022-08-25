import React, { Component } from 'react'
import styles from './index.module.less'

export class ABMLoading extends Component {
  render() {
    const { platformName } = this.props
    return (
      <div className={styles.abmPreScreenLoading}>
        <div className={styles.abmPreScreenLoadingCenter}>
          <div className={styles.abmPreScreenLoadingCenterAbsolute}>
            <div className={{ ...styles.abmPreScreenObject, ...styles.abmPreScreenObject_four }} />
            <div className={{ ...styles.abmPreScreenObject, ...styles.abmPreScreenObject_three }} />
            <div className={{ ...styles.abmPreScreenObject, ...styles.abmPreScreenObject_two }} />
            <div className={{ ...styles.abmPreScreenObject, ...styles.abmPreScreenObject_one }} />
          </div>
          <h1 className={styles.abmPreScreenText}>
            <span>{platformName}</span>
          </h1>
          <h1 className={styles.abmPreScreenText}>
            <span>{platformName}</span>
          </h1>
        </div>
      </div>
    )
  }
}
