const sequelize = require('../config/connection');
const { User, BlogPost } = require('../models');

const userData = require('./userData.json');
const blogPost = require('./blogPost.json');
const BlogPost = require('../models/BlogPost')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogPost of blogPostData) {
    await BlogPost.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
