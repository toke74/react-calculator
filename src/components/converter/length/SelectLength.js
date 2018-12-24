import React from "react";

const SelectLenth = ({ handleUnit, onChange, result }) => {
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
          defaultValue="mm"
          onChange={handleUnit}
        >
          <option value="mm">Millimeter (mm)</option>
          <option value="cm">Centimeter (cm)</option>
          <option value="m">Meters (m)</option>
          <option value="km">Kilometer (km)</option>
          <option value="in">Inch (in)</option>
          <option value="ft">Feet (ft)</option>
          <option value="ft-us">Feet (ft-us)</option>
          <option value="yd">Yards (yd)</option>
          <option value="mi">Miles (mi)</option>
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
          defaultValue="m"
          onChange={handleUnit}
        >
          <option value="mm">Millimeter (mm)</option>
          <option value="cm">Centimeter (cm)</option>
          <option value="m">Meters (m)</option>
          <option value="km">Kilometer (km)</option>
          <option value="in">Inch (in)</option>
          <option value="ft">Feet (ft)</option>
          <option value="ft-us">Feet (ft-us)</option>
          <option value="yd">Yards (yd)</option>
          <option value="mi">Miles (mi)</option>
        </select>
      </div>
    </div>
  );
};

export default SelectLenth;
