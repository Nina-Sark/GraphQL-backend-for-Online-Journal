const { gql } = require("apollo-server-express");

const enums = gql`
  enum THEME {
    default
    bloom
    city
    park
    classic
    classroom
    electric
    executive
    frontier
    highrise
    innovate
    solar
    storm
    sunset
    tidal
  }

  enum MOOD {
    sad
    frustrated
    fine
    miserable
    happy
  }

  enum BIN {
    journal
    note
  }
`;

module.exports = enums;
