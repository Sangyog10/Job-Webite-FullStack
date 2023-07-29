const express = require("express");

const router = express.Router();
const testUserAuth = require("../middleware/testUser");
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  showStats,
} = require("../controllers/jobs");

router.route("/").post(testUserAuth, createJob).get(getAllJobs);
router.route("/stats").get(showStats);
router
  .route("/:id")
  .get(getJob)
  .delete(testUserAuth, deleteJob)
  .patch(testUserAuth, updateJob);

module.exports = router;
