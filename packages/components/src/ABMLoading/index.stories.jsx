import React from 'react'

import { ABMLoading } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ABMLoading',
  component: ABMLoading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ABMLoading {...args} />

export const Loading = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
  platformName: 'Loading',
}
