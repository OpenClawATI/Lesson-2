"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("./models");
const router = (0, express_1.Router)();
router.get('/api/users', async (_req, res) => {
    const users = await models_1.User.find({}).lean();
    res.json(users);
});
router.get('/api/teams', async (_req, res) => {
    const teams = await models_1.Team.find({}).populate('members').lean();
    res.json(teams);
});
router.get('/api/activities', async (_req, res) => {
    const activities = await models_1.Activity.find({}).populate('userId').lean();
    res.json(activities);
});
router.get('/api/leaderboard', async (_req, res) => {
    const leaderboard = await models_1.LeaderboardEntry.find({}).populate('userId').sort({ rank: 1 }).lean();
    res.json(leaderboard);
});
router.get('/api/workouts', async (_req, res) => {
    const workouts = await models_1.Workout.find({}).lean();
    res.json(workouts);
});
exports.default = router;
