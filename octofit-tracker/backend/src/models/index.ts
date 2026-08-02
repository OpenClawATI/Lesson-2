import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  fitnessLevel: string;
  streak: number;
}

export interface ITeam extends Document {
  name: string;
  sport: string;
  members: mongoose.Types.ObjectId[];
}

export interface IActivity extends Document {
  userId: mongoose.Types.ObjectId;
  type: string;
  durationMinutes: number;
  date: Date;
}

export interface ILeaderboardEntry extends Document {
  userId: mongoose.Types.ObjectId;
  points: number;
  rank: number;
}

export interface IWorkout extends Document {
  name: string;
  category: string;
  difficulty: string;
  durationMinutes: number;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  fitnessLevel: { type: String, required: true },
  streak: { type: Number, default: 0 },
}, { timestamps: true });

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true },
  sport: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const activitySchema = new Schema<IActivity>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

const leaderboardEntrySchema = new Schema<ILeaderboardEntry>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  points: { type: Number, required: true },
  rank: { type: Number, required: true },
}, { timestamps: true });

const workoutSchema = new Schema<IWorkout>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
}, { timestamps: true });

export const User = mongoose.model<IUser>('User', userSchema);
export const Team = mongoose.model<ITeam>('Team', teamSchema);
export const Activity = mongoose.model<IActivity>('Activity', activitySchema);
export const LeaderboardEntry = mongoose.model<ILeaderboardEntry>('LeaderboardEntry', leaderboardEntrySchema);
export const Workout = mongoose.model<IWorkout>('Workout', workoutSchema);
