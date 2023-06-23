import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, CheckBox, CheckBoxProps } from '@ignite-ui/react'
import React from 'react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {}

// export const Disabled: StoryObj<CheckBoxProps> = {
//   args: {
//     disabled: true,
//     placeholder: 'Type your Email'

//   }
// }

// export const WithPrefix: StoryObj<CheckBoxProps> = {
//   args: {
//     prefix: 'call.com/',
//     placeholder: 'Type your Email'
//   }
// }
