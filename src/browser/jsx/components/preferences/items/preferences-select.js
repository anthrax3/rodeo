import _ from 'lodash';
import React from 'react';
import commonReact from '../../../services/common-react';

export default React.createClass({
  displayName: 'PreferencesSelect',
  propTypes: {
    onChange: React.PropTypes.func,
    originalValue: React.PropTypes.string,
    text: React.PropTypes.object.isRequired,
    value: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      onChange: _.noop,
      type: 'text'
    };
  },
  shouldComponentUpdate: function (nextProps) {
    return commonReact.shouldComponentUpdate(this, nextProps);
  },
  render: function () {
    const props = this.props,
      text = props.text,
      className = commonReact.getClassNameList(this);

    if (props.originalValue !== props.value) {
      className.push('preferences-select--modified');
    }

    function getOption(option) {
      if (option.group) {
        return <optgroup key={option.label} label={option.label}>{option.group.map(getOption)}</optgroup>;
      }

      return <option key={option.label} value={option.value}>{option.label}</option>;
    }

    return (
      <div className={className.join(' ')}>
        <label htmlFor={props.id}>{text[props.label]}</label>
        <select onChange={props.onChange} value={props.value}>{props.options.map(getOption)}</select>
      </div>
    );
  }
});
