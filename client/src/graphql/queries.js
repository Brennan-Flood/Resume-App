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
        draft{
          _id
        }
      }
      
    }
  `,
  FETCH_IMAGE: gql`
    query fetchImage($id: ID!) {
      image(_id: $id) {
        url
        name
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
        name
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
          name
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
          name
        }
      }
    }
  `,
  FETCH_USERS: gql`
    query fetchUsers {
      users{
        name
        email
        _id
        admin
        rootAdmin
        member
      }
    }
  `, 
  FETCH_DRAFT: gql`
    query fetchDraft($id: ID!) {
      draft(_id: $id) {
        state
      }
    }
  `
};