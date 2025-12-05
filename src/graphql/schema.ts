import { gql } from "graphql-tag";

export const typeDefs = gql`
  scalar DateTime

  type User {
    user_id: ID!
    username: String!
    email: String!
    first_name: String
    last_name: String
    created_at: DateTime
    updated_at: DateTime
    favorites: [Favorite!]!
  }

  type Ailment {
    ailment_id: ID!
    ailment_slug: String!
    ailment_title: String!
    link: String
    created_at: DateTime
    updated_at: DateTime
    remedies: [AilmentRemedy!]!
  }

  type Remedy {
    remedy_id: ID!
    remedy_name: String!
    description: String
    potency: String
    dosage_instructions: String
    created_at: DateTime
    updated_at: DateTime
  }

  type AilmentRemedy {
    ailment_remedy_id: ID!
    sort_order: Int
    symptom_description: String!
    created_at: DateTime
    ailment: Ailment!
    remedy: Remedy!
  }

  type Favorite {
    favorite_id: ID!
    created_at: DateTime
    user: User!
    ailment: Ailment
    remedy: Remedy
  }

  type Query {
    users: [User!]!
    user(id: ID!): User

    ailments(search: String): [Ailment!]!
    ailment(id: ID, slug: String): Ailment

    remedies(search: String): [Remedy!]!
    remedy(id: ID!): Remedy

    ailmentRemedies(ailmentId: ID!): [AilmentRemedy!]!
  }

  input RemedyInput {
    remedy_name: String!
    description: String
    potency: String
    dosage_instructions: String
  }

  type Mutation {
    addRemedy(input: RemedyInput!): Remedy!
    favoriteRemedy(userId: ID!, remedyId: ID!): Favorite!
    favoriteAilment(userId: ID!, ailmentId: ID!): Favorite!
  }
`;
