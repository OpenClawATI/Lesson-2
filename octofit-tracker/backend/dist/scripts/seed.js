"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            models_1.User.deleteMany({}),
            models_1.Team.deleteMany({}),
            models_1.Activity.deleteMany({}),
            models_1.LeaderboardEntry.deleteMany({}),
            models_1.Workout.deleteMany({}),
        ]);
        const users = await models_1.User.insertMany([
            { name: 'Ava Chen', email: 'ava@example.com', fitnessLevel: 'advanced', streak: 12 },
            { name: 'Noah Patel', email: 'noah@example.com', fitnessLevel: 'intermediate', streak: 7 },
            { name: 'Mina Alvarez', email: 'mina@example.com', fitnessLevel: 'beginner', streak: 4 },
        ]);
        await models_1.Team.insertMany([
            { name: 'Storm Riders', sport: 'Cycling', members: [users[0]._id, users[1]._id] },
            { name: 'Peak Builders', sport: 'Running', members: [users[2]._id] },
        ]);
        await models_1.Activity.insertMany([
            { userId: users[0]._id, type: 'Run', durationMinutes: 45, date: new Date('2026-08-01') },
            { userId: users[1]._id, type: 'Strength', durationMinutes: 60, date: new Date('2026-08-02') },
            { userId: users[2]._id, type: 'Yoga', durationMinutes: 30, date: new Date('2026-08-03') },
        ]);
        await models_1.LeaderboardEntry.insertMany([
            { userId: users[0]._id, points: 980, rank: 1 },
            { userId: users[1]._id, points: 870, rank: 2 },
            { userId: users[2]._id, points: 740, rank: 3 },
        ]);
        await models_1.Workout.insertMany([
            { name: 'HIIT Burn', category: 'Cardio', difficulty: 'hard', durationMinutes: 25 },
            { name: 'Core Flow', category: 'Mobility', difficulty: 'easy', durationMinutes: 20 },
            { name: 'Power Lift', category: 'Strength', difficulty: 'medium', durationMinutes: 40 },
        ]);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
