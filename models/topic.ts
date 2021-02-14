import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface TopicAttributes {
  Id: number;
  Name?: string;
  Keyword?: string[];
  Status?: "Active" | "Inactive";
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
}

export type TopicPk = "Id";
export type TopicId = Topic[TopicPk];
export type TopicCreationAttributes = Optional<TopicAttributes, TopicPk>;

export class Topic extends Model<TopicAttributes, TopicCreationAttributes> implements TopicAttributes {
  Id!: number;
  Name?: string;
  Keyword?: string[];
  Status?: "Active" | "Inactive";
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Topic {
    Topic.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    Name: {
      type: DataTypes.STRING(127),
      allowNull: true,
      field: 'name'
    },
    Keyword: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
      field: 'keyword'
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
    tableName: 'topics',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "topic_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Topic;
  }
}
