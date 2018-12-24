import React from "react";

const SelectVolume = ({ handleUnit, onChange, result }) => {
  return (
    <div>
      <div className="fromLenght">
        <h4>From</h4>
        <input
          type="text"
          name="fromAmount"
          defaultValue="1"
          onChange={onChange}
        />
        <select
          className="selectLength"
          name="unitFrom"
          defaultValue="mm3"
          onChange={handleUnit}
        >
          <option value="mm3"> Cubic Millimeter (mm3)</option>
          <option value="cm3"> Cubic Centimeter (cm3)</option>
          <option value="ml">Millilitre (ml)</option>
          <option value="l">Litre (l)</option>
          <option value="kl">Kilolitre (kl)</option>
          <option value="m3">Cubic meter (m3)</option>
          <option value="km3">Cubic Kilometer (km3)</option>
          <option value="tsp">Teaspoon (tsp)</option>
          <option value="Tbs">Tablespoon (Tbs)</option>
          <option value="in3"> Cubic Inch (in3)</option>
          <option value="fl-oz">Fluid Ounce (fl-oz)</option>
          <option value="cup">Cup (cup)</option>
          <option value="pnt">Pint (pnt)</option>
          <option value="qt">Quart (qt)</option>
          <option value="gal">Gallon (gal)</option>
          <option value="ft3">Cubic foot (ft3)</option>
          <option value="yd3">Cubic yard (yd3)</option>
        </select>
      </div>

      <div className="from">
        <h4>To</h4>
        <input
          type="text"
          name="toAmount"
          value={result}
          onChange={onChange}
          disabled
        />
        <select
          className="selectLength"
          name="unitTo"
          defaultValue="m3"
          onChange={handleUnit}
        >
          <option value="mm3"> Cubic Millimeter (mm3)</option>
          <option value="cm3"> Cubic Centimeter (cm3)</option>
          <option value="ml">Millilitre (ml)</option>
          <option value="l">Litre (l)</option>
          <option value="kl">Kilolitre (kl)</option>
          <option value="m3">Cubic meter (m3)</option>
          <option value="km3">Cubic Kilometer (km3)</option>
          <option value="tsp">Teaspoon (tsp)</option>
          <option value="Tbs">Tablespoon (Tbs)</option>
          <option value="in3"> Cubic Inch (in3)</option>
          <option value="fl-oz">Fluid Ounce (fl-oz)</option>
          <option value="cup">Cup (cup)</option>
          <option value="pnt">Pint (pnt)</option>
          <option value="qt">Quart (qt)</option>
          <option value="gal">Gallon (gal)</option>
          <option value="ft3">Cubic foot (ft3)</option>
          <option value="yd3">Cubic yard (yd3)</option>
        </select>
      </div>
    </div>
  );
};
export default SelectVolume;
