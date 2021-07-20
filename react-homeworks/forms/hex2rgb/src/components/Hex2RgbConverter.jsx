import React from 'react';
import PropTypes from 'prop-types';
import Hex2RgbConverterForm from './Hex2RgbConverterForm';

function convertHex(hex){
  hex = hex.toLowerCase().replace('#','');
  const parsedHex = parseInt(hex,16);

  if(parsedHex.toString(16) !== hex || hex.length > 6) {
    return {error: true};
  }
  const r = parseInt(hex.substring(0,2), 16);
  const g = parseInt(hex.substring(2,4), 16);
  const b = parseInt(hex.substring(4,6), 16);

  return `rgb(${r},${g},${b})`;
}

class Hex2RgbConverter extends React.Component {
  state = {
    hexValue: '',
    rgbValue: ''
  };

  handleOnChange = evt => {
    const hexValue = evt.target.value;
    this.setState({hexValue: hexValue});

    if(hexValue.length >= 7) {
      let rgbValue = convertHex(hexValue);
      if(rgbValue.error) {
        rgbValue = 'Ошибка!';
      }
      this.setState({rgbValue: rgbValue})
    }
  };

  render() {
    return (
      <div className="hex-2-rgb-converter" style={{backgroundColor: this.state.rgbValue}}>
        <Hex2RgbConverterForm hexValue={this.state.hexValue}
                              rgbValue={this.state.rgbValue}
                              onChange={this.handleOnChange}/>
      </div>
    )
  }

}

Hex2RgbConverter.propTypes = {};

export default Hex2RgbConverter;