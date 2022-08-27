/**
 * Created by wangkaihua on 2021/4/26.
 * 警告提示
 */
import React from 'react'
import { Alert } from 'antd'
import PropTypes from 'prop-types'

import './index.less'

export function AlertRender(props) {
  let { widgetConfig = {} } = props
  let { message, alertType, showIcon, closable, icon, description } = widgetConfig
  return (
    <Alert
      message={message}
      type={alertType}
      showIcon={showIcon}
      closable={closable}
      icon={icon}
      description={description}
    />
  )
}

AlertRender.propTypes = {
  widgetConfig: PropTypes.object,
}
