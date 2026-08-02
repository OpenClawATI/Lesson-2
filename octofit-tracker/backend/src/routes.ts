import { Router } from 'express';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models';

const router = Router();

router.get(['/api/users', '/api/users/'], async (_req, res) => {
  const users = await User.find({}).lean();
  res.json(users);
});

router.get(['/api/teams', '/api/teams/'], async (_req, res) => {
  const teams = await Team.find({}).populate('members').lean();
  res.json(teams);
});

router.get(['/api/activities', '/api/activities/'], async (_req, res) => {
  const activities = await Activity.find({}).populate('userId').lean();
  res.json(activities);
});

router.get(['/api/leaderboard', '/api/leaderboard/'], async (_req, res) => {
  const leaderboard = await LeaderboardEntry.find({}).populate('userId').sort({ rank: 1 }).lean();
  res.json(leaderboard);
});

router.get(['/api/workouts', '/api/workouts/'], async (_req, res) => {
  const workouts = await Workout.find({}).lean();
  res.json(workouts);
});

export default router;
