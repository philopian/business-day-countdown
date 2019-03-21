import React, { Component } from "react";
import FundClockProgress from "react-fundraising-countdown";
import bizDays from "business-day-math";

import { getTimezoneName } from "./util";

class Countdown extends Component {
  render() {
    var d = new Date();
    d.setHours(15);
    const endOf2BusinessDays = bizDays(2, d, getTimezoneName());

    return (
      <div className="center-filp-clock">
        <FundClockProgress campaignEndDate={endOf2BusinessDays} />
      </div>
    );
  }
}
export default Countdown;
