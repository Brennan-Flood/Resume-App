import gql from "graphql-tag";

const Mutations = {
  LOGIN_USER: gql`
    mutation LoginUser($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        loggedIn
      }
    }
  `,
  VERIFY_USER: gql`
    mutation VerifyUser($token: String!) {
      verifyUser(token: $token) {
        loggedIn
        _id
      }
    }
  `,
  REGISTER_USER: gql`
    mutation RegisterUser($name: String!, $email: String!, $password: String!) {
      register(name: $name, email: $email, password: $password) {
        token
        loggedIn
      }
    }
  `,
  CREATE_IMAGE: gql`
    mutation CreateImage($url: String!, $category: ID!) {
      createImage(url: $url, category: $category) {
        _id
        url
        category{
          _id
          name
        }
      }
    }
  `,
  CREATE_IMAGE_CATEGORY: gql`
    mutation CreateImageCategory($name: String!) {
      createImageCategory(name: $name){
        _id
        name
        images {
          _id
          url
        }
      }
    }
  `,
  ADD_IMAGE_TO_CATEGORY: gql`
    mutation AddImageToCategory($imageId: ID!, $categoryId: ID!) {
      addImageToCategory(imageId: $imageId, categoryId: $categoryId) {
        image{
          url
        }
      }
    }
  `
};
export default Mutations;