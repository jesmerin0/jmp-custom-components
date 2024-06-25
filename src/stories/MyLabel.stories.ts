import { MyLabel, type Props } from '../components/MyLabel';
import type { Meta, StoryObj } from '@storybook/react';


const meta:Meta<Props> = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
      },
    argTypes: {
        size: { control: 'inline-radio'},
        // size: { control: 'select'},
        fontColor: { control: 'color' },
    }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args:{
      label: 'Basic label',
    }
  };

export const AllCaps: Story = {
    args:{
      label: 'All Caps label',
      allCaps: true,
    }
  };
  export const Secondary: Story = {
    args:{
      label: 'Secondary label',
      color: 'text-secondary',
    }
  };

  export const CustomColor: Story = {
    args:{
      label: 'Custom color label',
      fontColor: '#5517ac',
    }
  };

  export const BackgroundColor: Story = {
    args:{
      size: 'h1',
      label: 'Background label',
      fontColor: 'white',
      backgroundColor: 'black'
    }
  };