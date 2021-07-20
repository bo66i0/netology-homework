import React from 'react';
import PropTypes from 'prop-types';

class Hex2RgbConverterForm extends React.Component {

  render() {
    const {hexValue,rgbValue,onChange: handleOnChange} = this.props;

    return (
      <form className="hex-2-rgb-converter-form">
        <input className="hex-2-rgb-converter-form__input"
               type="text"
               value={hexValue} onChange={handleOnChange}/>
        <div className="hex-2-rgb-converter-form__result">{rgbValue}</div>
      </form>
    )
  }

}

Hex2RgbConverterForm.propTypes = {
  hexValue: PropTypes.string.isRequired,
  rgbValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Hex2RgbConverterForm;