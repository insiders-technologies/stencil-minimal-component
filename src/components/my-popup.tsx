import { Component, h, Prop } from '@stencil/core';
import { Setting} from './my-component';

@Component({
  tag: 'my-popup',
})
export class MyPopup {
  @Prop() setting: Setting;

  render() {
    return (
      <my-toggle textbox={this.setting.textbox} />
    );
  }
}
