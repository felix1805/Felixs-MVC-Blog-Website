const sequelize = require('../config/connection');
const { User, BlogPost } = require('../models');

const userData = require('./userData.json');
const blogPost = require('./blogPost.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const entry of blogPost) {
    await BlogPost.create({
      ...entry,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
      // user_id: users.id,
    });
  }

  process.exit(0);
};

seedDatabase();
