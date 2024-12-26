import "./style.css";
import * as echarts from "echarts";
import {
  userCatergoricalReputationDataOptions,
  networkAnalysisReputationScorePercentageOption,
  userExpertiseLevelAndUserNatureForUserOption,
  numberOfMPXRFromPublicationForUserOption,
  MPXRFromInteractionPercentageUserOption,
  numberOfMPXRFromDifferentRewardsOption,
} from "./options";
let user_selectors = {
  userCatergoricalReputationData: document.getElementById(
    "user-catergorical-reputation-data"
  ),
  networkAnalysisReputationScorePercentage: document.getElementById(
    "network-analysis-reputation-score-percentage"
  ),
  userExpertiseLevelAndUserNatureForUser: document.getElementById(
    "user-expertise-level-and-user-nature-for-user"
  ),
  interactionBreakdownInNumbersUsersFavorite: document.getElementById(
    "interaction-breakdown-in-numbers-users-favorite"
  ),
  numberOfMPXRFromPublicationForUser: document.getElementById(
    "number-of-MPXR-from-publication-for-user"
  ),
  MPXRFromInteractionPercentageUser: document.getElementById(
    "MPXR-from-interaction-percentage-user"
  ),
  numberOfMPXRFromDifferentRewards: document.getElementById(
    "number-of-MPXR-from-different-rewards"
  ),
};
//fuctions for user
//having trouble with the title
const initUserCatergoricalReputationData = (data) => {
  const chart = echarts.init(user_selectors.userCatergoricalReputationData);

  const categories = data.categories;

  const seriesData = categories.map((category) => ({
    name: category.category,
    value: category.rep,
  }));
  let title = {
    text: "User Categorical Reputation Data",
    subtext: "MPXR Score",
    left: "center",
    top: 30,
    bottom: 10,
  };
  const series = userCatergoricalReputationDataOptions.series[0];
  const legend = userCatergoricalReputationDataOptions.legend[0];

  chart.setOption({
    ...userCatergoricalReputationDataOptions,
    series: {
      ...series,
      data: seriesData,
    },
    legend: { ...legend, data: seriesData.map((item) => item.name) },
    title: title,
  });
};

// const initNetworkAnalysisReputationScorePercentage = (data) => {
//   const chart = echarts.init(
//     user_selectors.networkAnalysisReputationScorePercentage
//   );

//   const positiveScores =
//     data["Network Breakdown"]["Source of Positive MPXR Score"];
//   const negativeScores =
//     data["Network Breakdown"]["Source of Negative MPXR Score"];

//   const audienceLevels = Object.keys(positiveScores);

//   const series = networkAnalysisReputationScorePercentageOption.series[0];
//   chart.setOption({
//     ...networkAnalysisReputationScorePercentageOption,
//     series: { ...series, data: positiveScores },
//   });
// };

const initUserExpertiseLevelAndUserNatureForUser = (data) => {
  const chart = echarts.init(
    user_selectors.userExpertiseLevelAndUserNatureForUser
  );

  let userNature = data["User Nature"];
  let users = Object.keys(data["User Nature"]);
  let userLevel = data["User Level"];
  console.log("level " + userLevel);
  // const userNatureData = users.map((user) => ({
  //   name: user,
  //   value: userNature[user],
  // }));
  // console.log(userNatureData);
  // console.log(Object.keys(data["User Nature"])); //user nature, number of published articles

  let updatedData = {
    name: "flare",
    children: [
      //  {
      //   "name": "animate",
      //   "children": [
      //    {"name": "Easing", "value": 17010},
      //    {"name": "FunctionSequence", "value": 5842},
      //    {
      //     "name": "interpolate",
      //     "children": [
      //      {"name": "ArrayInterpolator", "value": 1983},
      //      {"name": "ColorInterpolator", "value": 2047},
      //      {"name": "DateInterpolator", "value": 1375},
      //      {"name": "Interpolator", "value": 8746},
      //      {"name": "MatrixInterpolator", "value": 2202},
      //      {"name": "NumberInterpolator", "value": 1382},
      //      {"name": "ObjectInterpolator", "value": 1629},
      //      {"name": "PointInterpolator", "value": 1675},
      //      {"name": "RectangleInterpolator", "value": 2042}
      //     ]
      //    },
      //    {"name": "ISchedulable", "value": 1041},
      //    {"name": "Parallel", "value": 5176},
      //    {"name": "Pause", "value": 449},
      //    {"name": "Scheduler", "value": 5593},
      //    {"name": "Sequence", "value": 5534},
      //    {"name": "Transition", "value": 9201},
      //    {"name": "Transitioner", "value": 19975},
      //    {"name": "TransitionEvent", "value": 1116},
      //    {"name": "Tween", "value": 6006}
      //   ]
      //  },
      //  {
      //   "name": "data",
      //   "children": [
      //    {
      //     "name": "converters",
      //     "children": [
      //      {"name": "Converters", "value": 721},
      //      {"name": "DelimitedTextConverter", "value": 4294},
      //      {"name": "GraphMLConverter", "value": 9800},
      //      {"name": "IDataConverter", "value": 1314},
      //      {"name": "JSONConverter", "value": 2220}
      //     ]
      //    },
      //    {"name": "DataField", "value": 1759},
      //    {"name": "DataSchema", "value": 2165},
      //    {"name": "DataSet", "value": 586},
      //    {"name": "DataSource", "value": 3331},
      //    {"name": "DataTable", "value": 772},
      //    {"name": "DataUtil", "value": 3322}
      //   ]
      //  },
    ],
  };

  // let updatedData = {
  //   name: "User Data",
  //   children: [],
  // };

  if (userNature) {
    const userNatureData = users.map((user) => ({
      name: user,
      value: userNature[user],
    }));
    updatedData.children.push({
      name: "User Nature",
      children: userNatureData,
    });
  }

  if (userLevel) {
    updatedData.children.push({
      name: "User Level",
      children: [
        {
          name: data["User Level"],
        },
      ],
    });
  }
  console.log("updated " + updatedData);
  // const userLevelData =

  // let updatedData = {
  //   name: "User Data",
  //   children: [
  //     {
  //       name: "User Nature",
  //       children: [
  //         {
  //           name: data["User Nature"]["user nature"],
  //         },
  //         {
  //           name: data["User Nature"]["number of published articles"],
  //         },
  //       ],
  //     },
  //     {
  //       name: "User Level",
  //       children: [
  //         {
  //           name: data["User Level"],
  //         },
  //       ],
  //     },
  //   ],
  // };

  const series = userExpertiseLevelAndUserNatureForUserOption.series[0];
  chart.setOption({
    ...userExpertiseLevelAndUserNatureForUserOption,
    series: { ...series, data: updatedData },
  });

  /*var ROOT_PATH = "https://echarts.apache.org/examples";
    $.get(ROOT_PATH + "/data/asset/data/flare.json", function (data) {
      chart.hideLoading();
      // data.children.forEach(function (datum, index) {
      //   index % 2 === 0 && (datum.collapsed = true);
      // });
      chart.setOption(userExpertiseLevelAndUserNatureForUserOption);
    });*/
};

const initNumberOfMPXRFromPublicationForUser = (data) => {
  const chart = echarts.init(user_selectors.numberOfMPXRFromPublicationForUser);

  const mpxrFromComment =
    data["Reputation Score Breakdown by number"]["MPXR From Comment"];
  const mpxrFromSocialPost =
    data["Reputation Score Breakdown by number"]["MPXR From Social Post"];
  console.log("comment " + mpxrFromComment);
  console.log("social " + mpxrFromSocialPost);

  const mpxrRewardByComment = mpxrFromComment["MPXR Reward By Comment"];
  const mpxrRewardFromComment = mpxrFromComment["MPXR Reward From Comment"];
  const mpxrScoreFromUserInteraction =
    mpxrFromSocialPost["MPXR score from user interaction"];
  const mpxrRewardForPublication =
    mpxrFromSocialPost["MPXR reward for publication"];

  console.log(mpxrRewardByComment);
  const updatedData = [
    mpxrRewardByComment,
    mpxrRewardFromComment,
    mpxrScoreFromUserInteraction,
    mpxrRewardForPublication,
  ];

  const series = numberOfMPXRFromPublicationForUserOption.series[0];
  chart.setOption({
    ...numberOfMPXRFromPublicationForUserOption,
    series: { ...series, data: updatedData },
  });
};

const initMPXRFromInteractionPercentageUser = (data) => {
  const chart = echarts.init(user_selectors.MPXRFromInteractionPercentageUser);

  const interactions =
    data["Total User Interaction Breakdown"][
      "Total User Percentage of Interactions"
    ];
  console.log(interactions);
  const interactionKeys = Object.keys(interactions);
  const interactionValues = Object.values(interactions);
  const seriesData = interactionKeys.map((key, index) => ({
    name: key,
    value: interactionValues[index],
  }));

  let title = {
    text: "User interaction Score Breakdown By Percentage",
    subtext: "MPXR From Interaction",
    left: "center",
    bottom: 45,
  };

  const series = userCatergoricalReputationDataOptions.series[0];
  const legend = userCatergoricalReputationDataOptions.legend[0];

  chart.setOption({
    ...MPXRFromInteractionPercentageUserOption,
    series: {
      ...series,
      data: seriesData,
    },
    legend: { ...legend, data: seriesData.map((item) => item.name) },
    title: title,
  });
};

const initNumberOfMPXRFromDifferentRewards = (data) => {
  const chart = echarts.init(user_selectors.numberOfMPXRFromDifferentRewards);

  const seriesData = [];
  const reputations = data["Reputation Score Breakdown by number"];
  const reputationData = [];

  console.log("reputations " + JSON.stringify(reputations));

  for (const rep in reputations) {
    if (
      rep === "MPXR From Comment" ||
      rep === "MPXR From Publication" ||
      rep === "MPXR From Social Post"
    ) {
      continue;
    } else {
      reputationData.push({ value: reputations[rep], name: rep });
    }
  }

  console.log("reputationData " + JSON.stringify(reputationData));

  for (const item of reputationData) {
    if (typeof item.value === "number") {
      seriesData.push(item);
    } else if (typeof item.value === "object") {
      for (const objItem in item.value) {
        seriesData.push({ value: item.value[objItem], name: objItem });
      }
    }
  }

  const series = numberOfMPXRFromDifferentRewardsOption.series[0];
  const legend = numberOfMPXRFromDifferentRewardsOption.legend[0];

  chart.setOption({
    ...numberOfMPXRFromDifferentRewardsOption,
    series: { ...series, data: seriesData },
    legend: { ...legend, data: seriesData.map((item) => item.name) },
  });
};
async function fetchedUserById(userId) {
  const url = `http://localhost:3000/user/${userId}`; // Construct the URL using the postId
  console.log(`Fetching post with post_id: ${userId}`);

  try {
    const response = await fetch(url);

    // Check if the response is okay
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    6;
    const data = await response.json();
    if (data) {
      console.log(data);
      initUserCatergoricalReputationData(data);
      //initNetworkAnalysisReputationScorePercentage(data);
      initUserExpertiseLevelAndUserNatureForUser(data);
      initNumberOfMPXRFromPublicationForUser(data);
      initMPXRFromInteractionPercentageUser(data);
      initNumberOfMPXRFromDifferentRewards(data);
      // updateUserCatergoricalReputationData(data);
      // updateNetworkAnalysisChart(data);
      // updateUserExpertiseLevelAndUserNatureForUserChart(data);
      // updateinteractionBreakdownInNumbersUsersFavoriteChart(data);
      // updateNumberOfMPXRFromPublicationForUserChart(data);
      // updateMPXRFromInteractionPercentageUserChart(data);
      // Update the charts with the fetched data
    } else {
      console.log("Fetched data is not valid or 'read_time' is not defined.");
    }
  } catch (error) {
    console.error("Error when fetching the data:", error);
  }
}

fetchedUserById(2)
  .then((data) => {
    if (data) {
      console.log("Fetched data:", data);
    } else {
      console.log("No data fetched due to error.");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
