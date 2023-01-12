import { Component, h, Prop } from '@stencil/core';

export type TextboxSetting = {
  label: string;
};

export type Setting = {
  textbox?: TextboxSetting;
};

@Component({
  tag: 'my-component',
})
export class MyComponent {
  @Prop() setting: Setting;

  componentWillRender() {
      this.setting = {
        textbox: {
          label: 'foo',
        }
      };
  }

  render() {
    return (
      <my-popup setting={this.setting} />
    );
  }
}

