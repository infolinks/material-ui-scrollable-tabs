import PropTypes from 'prop-types';
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import {Tabs, Tab} from 'material-ui-scrollable-tabs/Tabs';
import EnhancedButton from 'material-ui/internal/EnhancedButton';

import CodeExample from '../../CodeExample';
import PropTypeDescription from '../../PropTypeDescription';

import scrollingSimpleCode from '!raw-loader!./ScrollingSimple';
import ScrollingSimple from './ScrollingSimple';
import scrollingSimpleDesktopCode from '!raw-loader!./ScrollingSimpleDesktop';
import ScrollingSimpleDesktop from './ScrollingSimpleDesktop';
import longLabelsCode from '!raw-loader!./LongLabels';
import LongLabels from './LongLabels';
import multiLineLabelsCode from '!raw-loader!./MultiLineLabels';
import MultiLineLabels from './MultiLineLabels';
import fixedSimpleCode from '!raw-loader!./FixedSimple';
import FixedSimple from './FixedSimple';
import fixedMaxSizeCode from '!raw-loader!./FixedMaxSize';
import FixedMaxSize from './FixedMaxSize';
import fixedMinSizeCode from '!raw-loader!./FixedMinSize';
import FixedMinSize from './FixedMinSize';

import tabsCode from '!raw-loader!material-ui-scrollable-tabs/Tabs/Tabs';
import tabCode from '!raw-loader!material-ui-scrollable-tabs/Tabs/Tab';

const descriptions = {
  scrollingSimple: 'A simple example of scrolling behavior without desktop scroll buttons. ' +
    'If a tab isn\'t fully in view, clicking it will smoothly slide it into view. ' +
    'Since the labels are short, the tabs will shrink to the mimimum size of 72px.',
  simpleDesktop: 'A simple example of scrolling behavior with desktop scroll buttons. ' +
    'Desktop scroll buttons can be clicked to cause the tab strip to scroll left and right. ' +
    'and scrolling will be animated smoothly. ' +
    'Left and right scroll buttons will only appear if scrolling that direction is available.',
  longLabels: 'When a tab has a long label, the tab will grow to accomodate it, up to the max of 264px. ' +
    'On webkit based browsers, the text will clamp at the end of the first line with an ellipsis. ' +
    'However, on non-webkit based browsers, the text will wrap until it fills the button\'s height. ' +
    'This wrapping behavior is against material design standards and you should not use labels which wrap.',
  multiLineLabels: 'Tabs with long labels can be allowed to wrap to a second line. This will shrink the ' +
    'font size.',
  fixedSimple: 'A simple example of fixed tabs (no scrolling).  Fixed tabs will be evenly sized based ' +
    'on the width of their container.  They will still shrink no smaller than the minimum tab size nor ' +
    'grow larger than the maximum tab size',
  fixedMaxSize: 'If fixed tabs hit their maximum size, they will be left-aligned within the container ' +
    'and the remainder of the container will not contain any tabs.',
  fixedMinSize: 'If fixed tabs shrink to their minimum size, they will overflow their container and the ' +
    'remaining tabs will be inaccessible.',
};

class TabPage extends Component {

  constructor() {
    super();
    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNextTab = this.handleNextTab.bind(this);
    this.handleBackTab = this.handleBackTab.bind(this);
    this.handleActive = this.handleActive.bind(this);
  }



  handleActive(value) {
    this.setState({value: value})
  }

  handleNextTab() {
    let value = this.state.value;
      value = value + 1;
      this.setState({value: value})
    this.forceUpdate();
  }

  handleBackTab() {
    let value = this.state.value;
    if(value !== 0) {
      value = value - 1;
      this.setState({value: value})
    }
    this.forceUpdate();
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  };

  render() {

    return (
      <div >

        <div>
          <div>
            <Tabs
              value={this.state.value}
              onChange={value => this.setState({value: value})}
              tabType={'scrollable-buttons'}>

              <Tab isMultiLine={true} onActive={this.handleActive.bind(this, 0)} label={'pagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdasdsae 1'} value={0} key={0}>
              </Tab>

              <Tab isMultiLine={true} onActive={this.handleActive.bind(this, 1)} label={'papagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdage 2'} value={1} key={1}>
              </Tab>
              <Tab isMultiLine={true} onActive={this.handleActive.bind(this,2)} label={'pagpagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdspagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdaadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdae 3'} value={2} key={2}>

              </Tab>
              <Tab isMultiLine={true} onActive={this.handleActive.bind(this,3)} label={'pagpagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdspagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdaadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdae 3'} value={2} key={2}>

              </Tab>
              <Tab isMultiLine={true} onActive={this.handleActive.bind(this,4)} label={'pagpagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdspagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdaadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdae 3'} value={2} key={2}>

              </Tab>
              <Tab isMultiLine={true} onActive={this.handleActive.bind(this,5)} label={'pagpagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdspagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdaadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdae 3'} value={2} key={2}>

              </Tab>
              <Tab isMultiLine={true} onActive={this.handleActive.bind(this,6)} label={'pagpagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdspagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdaadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdae 3'} value={2} key={2}>

              </Tab>
              <Tab isMultiLine={true} onActive={this.handleActive.bind(this,7)} label={'pagpagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdspagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdaadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdae 3'} value={2} key={2}>

              </Tab>
              <Tab isMultiLine={true} onActive={this.handleActive.bind(this,8)} label={'pagpagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdspagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdaadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdapagdsadasdasdsadasdasdasdasdasdasdasdasdasdasdsadasdasdae 3'} value={2} key={2}>

              </Tab>

            </Tabs>
            <EnhancedButton onClick={this.handleBackTab.bind(this)}>Back</EnhancedButton>
            <EnhancedButton onClick={this.handleNextTab.bind(this)}>Next</EnhancedButton>
          </div>
        </div>
      </div>
    );
  }
}

export default withWidth()(TabPage);
