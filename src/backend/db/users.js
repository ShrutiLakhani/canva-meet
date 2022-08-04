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
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Batman",
    lastName: "Marvel",
    username: "batmanmarvel@gmail.com",
    password: "batmanmarvel",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Batman1",
    lastName: "Marvel",
    username: "Batman1",
    password: "Marvel",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
