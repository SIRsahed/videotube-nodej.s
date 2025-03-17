/* _id string pk
  subscriber ObjectId user
  channel ObjectId users
  createdAt Date
  updatedAt Date */

import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
)

export const subscription = mongoose.model("Subscription", subscriptionSchema)