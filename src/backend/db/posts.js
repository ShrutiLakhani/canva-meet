import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "You either know fashion or you don’t.",
    postImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstname: "Coco",
          lastname: "Chanel",
          username: "@cocochanel",
          profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        },
        {
          firstname: `Georgio`,
          lastname: `Armani`,
          username: `@garmani`,
          profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: "Anna Wintour",
    profileImage: ``,
    createdAt: new Date("February 10 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "Christian Dior",
        profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        text: "You said it!",
        createdAt: new Date("September 12 2022 12:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: `Karl Lagerfeld`,
        profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        text: "Point on",
        createdAt: new Date("September 13 2022 18:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Dress shabbily and they remember the dress;dress impeccably and they remember the women",
    postImage: null,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstname: `Manish`,
          lastname: `Malhotra`,
          username: `mmalhotra`,
          profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        },
        {
          firstname: `Anna`,
          lastname: `Wintour`,
          username: `annawintour`,
          profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        },
        {
          firstname: `Karl`,
          lastname: `Lagerfeld`,
          username: `lagerfled`,
          profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: "Coco Chanel",
    profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
    createdAt: new Date("September 19 2022 12:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "annawintour",
        profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        text: "Couldn't agree more",
        createdAt: new Date("September 12 2022 11:18:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: `Ritu Kumar`,
        profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        text: "Love you for this",
        createdAt: new Date("September 17 2022 16:38:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "One is never over-dressed or underdressed with a Little Black Dress",
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654365419/pexels-%D0%B8%D0%BD%D0%BD%D0%B0-%D0%BC%D0%B8%D0%BA%D0%B8%D1%82%D0%B0%D1%81%D1%8C-4252184_rnc7me.jpg`,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstname: `Vikram`,
          lastname: `Phandis`,
          username: `vphandis`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
        {
          firstname: `Sonam`,
          lastname: `Kapoor`,
          username: `sonamkapoor`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: "Coco Chanel",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
    createdAt: new Date("September 10 2022 10:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "vphandis",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
        text: "I second that",
        createdAt: new Date("September 22 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: `sonamkapoor`,
        profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        text: "your true admirer",
        createdAt: new Date("September 23 2022 4:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: `Shoes transform your body language and attitude. They lift you physically and emotionally`,
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654365418/pexels-prince-kumar-2421467_bsdkqv.jpg`,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstname: `Michael`,
          lastname: ` Kors`,
          username: `mKors`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
        {
          firstname: `Ralph`,
          lastname: `Lauren`,
          username: `RLauren`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: "C Louboutin",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
    createdAt: new Date("September 18 2022 12:16:36"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "karllagerfled",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
        text: "Yeah!",
        createdAt: new Date("February 19 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: `Coco Chanel`,
        profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        text: "Adore your thoughts",
        createdAt: new Date("September 20 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Fashion is something that comes from within you",
    postImage: null,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Ralph Lauren",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
    createdAt: new Date("February 10 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Elegant, eclectic and experimental",
    postImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstname: "Coco",
          lastname: "Chanel",
          username: "@cocochanel",
          profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        },
        {
          firstname: `Georgio`,
          lastname: `Armani`,
          username: `@garmani`,
          profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: "Sonam Kapoor",
    profileImage: ``,
    createdAt: new Date("February 10 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "Christian Dior",
        profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        text: "You said it!",
        createdAt: new Date("September 12 2022 12:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Elegant, eclectic and experimental",
    postImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstname: "Coco",
          lastname: "Chanel",
          username: "@cocochanel",
          profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        },
        {
          firstname: `Georgio`,
          lastname: `Armani`,
          username: `@garmani`,
          profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: "Curves & Style",
    profileImage: ``,
    createdAt: new Date("February 10 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "Christian Dior",
        profileImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anna_Wintour_2019_crop.jpg/640px-Anna_Wintour_2019_crop.jpg`,
        text: "You said it!",
        createdAt: new Date("September 12 2022 12:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
