import React, { useState } from "react";
import GaugeChart from "react-gauge-chart";

// type GaugeInput = {
//   bmi:number;
//    lowerBound:number;
//     upperBound:number;
//     segmentAdjustment:number;
// }

const GraphGaugeChart = () => {
  // const [bmi, setBmi] = useState(0);

  //   const gageCalc = bmi => {
  //     var result = 0;
  //     if (bmi >= 16 && bmi <= 18.5) {
  //       result = GetPercentage(bmi, 16, 18.5, 0);
  //     } else if (bmi > 18.5 && bmi < 25) {
  //       result = GetPercentage(bmi, 18.5, 25, 0.33);
  //     } else if (bmi >= 25 && bmi <= 30) {
  //       result = GetPercentage(bmi, 25, 30, 0.66);
  //     }
  //     return result;
  //   };

  //   const GetPercentage=({bmi, lowerBound, upperBound, segmentAdjustment})=> {
  //     return (
  //       (bmi - lowerBound) / (upperBound - lowerBound) / 3 + segmentAdjustment
  //     );
  //   }

  return (
    <div>
      <GaugeChart
        id="gauge-chart"
        percent={0.8}
        nrOfLevels={3}
        colors={["#FF0000", "orange", "#228B22"]}
      />
    </div>
  );
};

export default GraphGaugeChart;
