'use strict';

export default (sequelize, DataTypes) => {
  const User = sequelize.define( 'Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // avatar: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 'anon.png',
    // },
    accessToken: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },

  {
    timestamps: false
  } );

  return User;
}
