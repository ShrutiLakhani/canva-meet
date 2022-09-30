import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "Sonam Kapoor",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Curves",
    lastName: "Style",
    username: "Curves&Style",
    password: "fashion",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Batman1",
    lastName: "Marvel",
    username: "Rohit Bal",
    password: "Marvel",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Batman1",
    lastName: "Marvel",
    username: "Coco Chanel",
    password: "Marvel",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Batman1",
    lastName: "Marvel",
    username: "Ritu Kumar",
    password: "Marvel",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
