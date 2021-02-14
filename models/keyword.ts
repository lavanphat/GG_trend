import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Topic, TopicId } from './topic';

export interface KeywordAttributes {
  Id: number;
  Query?: string;
  Link?: string;
  Value?: number;
  TopicId?: number;
  Status?: "Active" | "Inactive";
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
}

export type KeywordPk = "Id";
export type KeywordId = Keyword[KeywordPk];
export type KeywordCreationAttributes = Optional<KeywordAttributes, KeywordPk>;

export class Keyword extends Model<KeywordAttributes, KeywordCreationAttributes> implements KeywordAttributes {
  Id!: number;
  Query?: string;
  Link?: string;
  Value?: number;
  TopicId?: number;
  Status?: "Active" | "Inactive";
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;

  // Keyword belongsTo Topic via TopicId
  Topic!: Topic;
  getTopic!: Sequelize.BelongsToGetAssociationMixin<Topic>;
  setTopic!: Sequelize.BelongsToSetAssociationMixin<Topic, TopicId>;
  createTopic!: Sequelize.BelongsToCreateAssociationMixin<Topic>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Keyword {
    Keyword.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    Query: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "u_keyword_query",
      field: 'query'
    },
    Link: {
      type: DataTypes.STRING(512),
      allowNull: true,
      field: 'link'
    },
    Value: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'value'
    },
    TopicId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'topics',
        key: 'id'
      },
      field: 'topic_id'
    },
    Status: {
      type: DataTypes.ENUM("Active", "Inactive"),
      allowNull: true,
      defaultValue: "Active",
      field: 'status'
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.fn('now'),
      field: 'created_at'
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    DeletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'keywords',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "keywords_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "u_keyword_query",
        unique: true,
        fields: [
          { name: "query" },
        ]
      },
    ]
  });
  return Keyword;
  }
}
