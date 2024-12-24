// Post Options

export const articleReadTimeChartOptions = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  series: [
    {
      name: "Pressure",
      type: "gauge",
      detail: {
        formatter: "{value}",
      },
      data: [
        {
          value: 50,
          name: "SCORE",
        },
      ],
    },
  ],
};

export const ArticleTotalReadTimeChartOption = {
  series: [
    {
      type: "gauge",
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false,
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: "#464646",
        },
      },
      axisLine: {
        lineStyle: {
          width: 40,
        },
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
        distance: 50,
      },
      title: {
        fontSize: 14,
      },
      detail: {
        width: 50,
        height: 14,
        fontSize: 14,
        color: "inherit",
        borderColor: "inherit",
        borderRadius: 20,
        borderWidth: 1,
        formatter: "{value}%",
      },
    },
  ],
};

export const totalReadedTimeChartOption = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  series: [
    {
      name: "Pressure",
      type: "gauge",
      progress: {
        show: true,
      },
      detail: {
        valueAnimation: true,
        formatter: "{value}",
      },
      data: [
        {
          value: 10,
          name: "SCORE",
        },
      ],
    },
  ],
};

export const completionRateForArticleOption = {
  legend: {},
  tooltip: {},
  dataset: {},
  series: [],
};

export const interactionTypeCountWithNameOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [],
};

export const articleInteractionScoreByAudienceTypeOption = {
  backgroundColor: {
    image: [],
    repeat: "repeat",
  },
  title: {
    text: "饼图纹理",
    textStyle: {
      color: "#235894",
    },
  },
  tooltip: {},
  series: [
    {
      name: "pie",
      type: "pie",
      selectedMode: "single",
      selectedOffset: 30,
      clockwise: true,
      label: {
        fontSize: 18,
        color: "#235894",
      },
      labelLine: {
        lineStyle: {
          color: "#235894",
        },
      },
      data: [],
      itemStyle: {
        opacity: 0.7,
        color: {
          image: [],
          repeat: "repeat",
        },
        borderWidth: 3,
        borderColor: "#235894",
      },
    },
  ],
};

// export const audienceLevelPeoplesChoicePercentagesOption = {
//   tooltip: {},
//   legend: {
//     data: ["typeA", "typeB"],
//     selectedMode: "single",
//   },
//   xAxis: {
//     data: ["a", "b", "c", "d", "e"],
//     axisTick: { show: false },
//     axisLine: { show: false },
//     axisLabel: { show: false },
//   },
//   yAxis: {
//     max: bodyMax,
//     offset: 20,
//     splitLine: { show: false },
//   },
//   grid: {
//     top: "center",
//     height: 230,
//   },
//   markLine: {
//     z: -100,
//   },
//   series: [
//     {
//       name: "typeA",
//       type: "pictorialBar",
//       symbolClip: true,
//       symbolBoundingData: bodyMax,
//       label: labelSetting,
//       data: [
//         {
//           value: 123,
//           symbol: symbols[0],
//         },
//         {
//           value: 34,
//           symbol: symbols[1],
//         },
//         {
//           value: 101,
//           symbol: symbols[2],
//         },
//         {
//           value: 89,
//           symbol: symbols[3],
//         },
//         {
//           value: 72,
//           symbol: symbols[4],
//         },
//       ],
//       markLine: markLineSetting,
//       z: 10,
//     },
//     {
//       name: "typeB",
//       type: "pictorialBar",
//       symbolClip: true,
//       symbolBoundingData: bodyMax,
//       label: labelSetting,
//       data: [
//         {
//           value: 12,
//           symbol: symbols[0],
//         },
//         {
//           value: 44,
//           symbol: symbols[1],
//         },
//         {
//           value: 131,
//           symbol: symbols[2],
//         },
//         {
//           value: 33,
//           symbol: symbols[3],
//         },
//         {
//           value: 142,
//           symbol: symbols[4],
//         },
//       ],
//       markLine: markLineSetting,
//       z: 10,
//     },
//     {
//       name: "full",
//       type: "pictorialBar",
//       symbolBoundingData: bodyMax,
//       animationDuration: 0,
//       itemStyle: {
//         color: "#ccc",
//       },
//       data: [
//         {
//           value: 1,
//           symbol: symbols[0],
//         },
//         {
//           value: 1,
//           symbol: symbols[1],
//         },
//         {
//           value: 1,
//           symbol: symbols[2],
//         },
//         {
//           value: 1,
//           symbol: symbols[3],
//         },
//         {
//           value: 1,
//           symbol: symbols[4],
//         },
//       ],
//     },
//   ],
// };

//User Options

export const userCatergoricalReputationDataOptions = {
  title: {},
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    type: "scroll",
    orient: "vertical",
    right: 10,
    top: 10,
    bottom: 20,
    data: [],
  },
  series: [
    {
      name: "姓名",
      type: "pie",
      radius: "55%",
      center: ["40%", "50%"],
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

export const networkAnalysisReputationScorePercentageOption = {
  angleAxis: {},
  radiusAxis: {},
  polar: {},
  series: [
    {
      type: "bar",
      data: [1, 2, 3, 4],
      coordinateSystem: "polar",
      name: "A",
      stack: "a",
      emphasis: {
        focus: "series",
      },
    },
    {
      type: "bar",
      data: [1, 2, 3, 4],
      coordinateSystem: "polar",
      name: "C",
      stack: "a",
      emphasis: {
        focus: "series",
      },
    },
  ],
  legend: {
    show: true,
    data: ["A", "B", "C"],
  },
};

export const userExpertiseLevelAndUserNatureForUserOption = {
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
  },
  series: [
    {
      type: "tree",
      data: [],
      top: "1%",
      left: "7%",
      bottom: "1%",
      right: "20%",
      symbolSize: 7,
      label: {
        position: "left",
        verticalAlign: "middle",
        align: "right",
        fontSize: 9,
      },
      leaves: {
        label: {
          position: "right",
          verticalAlign: "middle",
          align: "left",
        },
      },
      emphasis: {
        focus: "descendant",
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750,
    },
  ],
};

export const numberOfMPXRFromPublicationForUserOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  series: [
    {
      name: "MPXR From",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [],
    },
    {
      name: "MPXR By",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [],
    },
  ],
};

export const MPXRFromInteractionPercentageUserOption = {
  title: {},
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

export const numberOfMPXRFromDifferentRewardsOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [],
    },
  ],
};
