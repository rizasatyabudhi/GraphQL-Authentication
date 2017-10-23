import gql from "graphql-tag";

export default gql`
  mutation addLyricToSong($content: String, $id: ID) {
    addLyricToSong(content: $content, songId: $id) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
