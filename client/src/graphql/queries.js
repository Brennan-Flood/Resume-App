import gql from "graphql-tag";

export default {
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `,
  CURRENT_USER_ID: gql`
    query fetchCurrentUserId {
      currentUserId @client
    }
  `,
  CURRENT_USER_INFO: gql`
    query user($id: ID!) {
      user(_id: $id) {
        name
        email
        member
        admin
        rootAdmin
      }
      
    }
  `,
  FETCH_IMAGE: gql`
    query fetchImage($id: ID!) {
      image(_id: $id) {
        url
        category{
          name
          _id
        }
      }
    }
  `,
  FETCH_IMAGES: gql`
    query fetchImages {
      images {
        url
        category {
          name
          _id
        }
      }
    }
  `,
  FETCH_CATEGORY: gql`
    query fetchCategory($id: ID!) {
      imageCategory(_id: $id) {
        name
        images {
          _id
          url
        }
      }
    }
  `,
  FETCH_CATEGORIES: gql`
    query fetchCategories {
      imageCategories {
        name
        images{
          url
        }
      }
    }
  `
};