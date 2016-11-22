import React from 'react';
import commonReact from '../../../services/common-react';

export default React.createClass({
  displayName: 'PreferencesNumber',
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    originalValue: React.PropTypes.number,
    text: React.PropTypes.object.isRequired,
    value: React.PropTypes.number
  },
  shouldComponentUpdate: function (nextProps) {
    return commonReact.shouldComponentUpdate(this, nextProps);
  },
  render: function () {
    const props = this.props,
      text = props.text,
      className = commonReact.getClassNameList(this);

    if (props.originalValue !== props.value) {
      className.push('preferences-number--modified');
    }

    return (
      <div className={className.join(' ')}>
        <label htmlFor={props.id}>{text[props.label]}</label>
        <input onChange={props.onChange} type="number" value={props.value}/>
      </div>
    );
  }
});
