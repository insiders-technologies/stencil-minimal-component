import { Component, h, Prop } from '@stencil/core';
import { TextboxSetting } from './my-component';

@Component({
  tag: 'my-toggle',
})

export class MyLabel {
  @Prop() textbox: TextboxSetting;

  render() {
    return ( 
      <label>{this.textbox.label}</label>
    )
  }
}
