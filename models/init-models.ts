import type { Sequelize } from "sequelize";
import sequelizeDB from "../libs/postgres";
import { Keyword } from "./keyword";
import type { KeywordAttributes, KeywordCreationAttributes } from "./keyword";
import { Topic } from "./topic";
import type { TopicAttributes, TopicCreationAttributes } from "./topic";

export {
  Keyword,
  Topic,
};

export type {
  KeywordAttributes,
  KeywordCreationAttributes,
  TopicAttributes,
  TopicCreationAttributes,
};

// tslint:disable-next-line:typedef
function initModels(sequelize: Sequelize) {
  Keyword.initModel(sequelize);
  Topic.initModel(sequelize);

  Keyword.belongsTo(Topic, { as: "Topic", foreignKey: "TopicId"});
  Topic.hasMany(Keyword, { as: "Keywords", foreignKey: "TopicId"});

  return {
    Keyword,
    Topic,
  };
}
export default initModels(sequelizeDB);
