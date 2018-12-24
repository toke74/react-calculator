import React from "react";

const CountryCodes = ({ calculateCurrency, onChange, result }) => {
  return (
    <div>
      <div className="from">
        <h4>From</h4>
        <input
          type="text"
          name="fromAmount"
          defaultValue="1"
          onChange={onChange}
        />
        <select
          className="selectCountry"
          name="from"
          defaultValue="USD"
          onChange={calculateCurrency}
        >
          <option value="AUD">Australian - dollar</option>
          <option value="BGN">Bulgarian - lev</option>
          <option value="BRL">Brazilian - real</option>
          <option value="CAD">Canadian - dollar</option>
          <option value="CHF">Swiss - franc</option>
          <option value="CNY">Chinese - yuan renminbi</option>
          <option value="CZK">Czech - koruna</option>
          <option value="DKK">Danish - krone</option>
          <option value="EUR">European - Euro</option>
          <option value="GBP">Pound - sterling</option>
          <option value="HKD">Hong Kong - dollar</option>
          <option value="HRK">Croatian - kuna</option>
          <option value="HUF">Hungarian - forint</option>
          <option value="IDR">Indonesian - rupiah</option>
          <option value="ILS">Israeli - shekel</option>
          <option value="ISK">Icelandic - krona</option>
          <option value="JPY">Japanese - yen</option>
          <option value="KRW">South Korean - won</option>
          <option value="MXN">Mexican - peso</option>
          <option value="MYR">Malaysian - ringgit</option>
          <option value="NOK">Norwegian - krone</option>
          <option value="NZD">New Zealand - dollar</option>
          <option value="PHP">Philippine - piso</option>
          <option value="PLN">Polish - zloty</option>
          <option value="RON">Romanian - leu</option>
          <option value="RUB">Russian - rouble</option>
          <option value="SEK">Swedish - krona</option>
          <option value="SGD">Singapore - dollar</option>
          <option value="THB">Thai - baht</option>
          <option value="TRY">Turkish - lira</option>
          <option value="USD">US - dollar</option>
          <option value="ZAR">South African - rand</option>
        </select>
      </div>
      <br />
      <br />
      <div className="to">
        <h4>To</h4>
        <input type="text" name="toAmount" value={result} disabled />
        <select
          className="selectCountry"
          name="to"
          defaultValue="SEK"
          onChange={calculateCurrency}
        >
          <option value="AUD">Australian - dollar</option>
          <option value="BGN">Bulgarian - lev</option>
          <option value="BRL">Brazilian - real</option>
          <option value="CAD">Canadian - dollar</option>
          <option value="CHF">Swiss - franc</option>
          <option value="CNY">Chinese - yuan renminbi</option>
          <option value="CZK">Czech - koruna</option>
          <option value="DKK">Danish - krone</option>
          <option value="EUR">European - Euro</option>
          <option value="GBP">Pound - sterling</option>
          <option value="HKD">Hong Kong - dollar</option>
          <option value="HRK">Croatian - kuna</option>
          <option value="HUF">Hungarian - forint</option>
          <option value="IDR">Indonesian - rupiah</option>
          <option value="ILS">Israeli - shekel</option>
          <option value="ISK">Icelandic - krona</option>
          <option value="JPY">Japanese - yen</option>
          <option value="KRW">South Korean - won</option>
          <option value="MXN">Mexican - peso</option>
          <option value="MYR">Malaysian - ringgit</option>
          <option value="NOK">Norwegian - krone</option>
          <option value="NZD">New Zealand - dollar</option>
          <option value="PHP">Philippine - piso</option>
          <option value="PLN">Polish - zloty</option>
          <option value="RON">Romanian - leu</option>
          <option value="RUB">Russian - rouble</option>
          <option value="SEK">Swedish - krona</option>
          <option value="SGD">Singapore - dollar</option>
          <option value="THB">Thai - baht</option>
          <option value="TRY">Turkish - lira</option>
          <option value="USD">US - dollar</option>
          <option value="ZAR">South African - rand</option>
        </select>
      </div>
    </div>
  );
};

export default CountryCodes;
