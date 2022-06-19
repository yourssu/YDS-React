import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ToastMessage } from './ToastMessage'

export default {
  title: 'Component/ToastMessage',
  component: ToastMessage,
  argTypes: {},
} as ComponentMeta<typeof ToastMessage>

/** !! */
const Template: ComponentStory<typeof ToastMessage> = (args) => (
  <div style={{ backgroundColor: '#c4c4c4eb', width: '374px', height: '400px', position: 'relative' }}>
    <ToastMessage {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  children: '토스트 메시지',
}

export const MultiLine = Template.bind({})
MultiLine.args = {
  children: '줄 수가 두 줄 이상이 되는 토스트 메시지입니다. 좌측 정렬을 해주세요.',
}
