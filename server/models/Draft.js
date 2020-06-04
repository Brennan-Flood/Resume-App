const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DraftSchema = new Schema({
  state: {
    type: String,
    default: JSON.stringify({
      firstName: "",
      lastName: "",
      title: "",
      yearsExperience: "",
      currentImage: "",
      currentTitle: "",
      currentCompany: "",
      currentPositionStartTime: 2020,
      currentPositionTime: "",
      currentPositionParagraph: "",
      recentSearches: "",
      educationAndEmployment: [[1, { title: "", entity: "", startTime: "", endTime: "", image: "" }]],
      clearenceLevels: { secret: 10, topSecret: 10, TSSCI: 10, TSSCICIPolygraph: 10, TSSCIFullScopePolygraph: 10 },
      linkedinReviews: [[1, { author: "", body: "" }]],
      themeColor: { backgroundColor: "rgb(229, 229, 229)", color: "black" },
      federalAgencies: {},
      hobbies: {},
      image: "",
      toolkit: {},
      ats: {},
      federalExperience: true,
    })

  }
});

module.exports = mongoose.model("drafts", DraftSchema)