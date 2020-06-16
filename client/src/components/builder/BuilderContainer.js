import React from "react";
import Builder from "./Builder";
import { Query, Mutation } from "react-apollo";
import Queries from "../../graphql/queries";
import Mutations from "../../graphql/mutations";
const { FETCH_DRAFT } = Queries;
const { UPDATE_DRAFT } = Mutations;

class BuilderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.updateCache = this.updateCache.bind(this);
  }

  updateCache(cache, data) {
    let draft;
    try {
      draft = cache.readQuery({
        query: FETCH_DRAFT,
        variables: { id: data.draft._id }
      });
    } catch (err) {
      return;
    }


    if (draft) {
      cache.writeQuery({
        query: FETCH_DRAFT,
        variables: {
          id: data.draft._id
        },
        data: {
          state: data.draft.state
          
        }
      })
    }
  }

  render() {
    return (
      <Query query={FETCH_DRAFT} variables={{ id: this.props.draftId }}>
        {({ data, loading, error }) => {
          if (error) return <div>{error}</div>
          if (loading) return <div>{loading}</div>
          console.log(data.draft)
          return (
            <Mutation mutation={UPDATE_DRAFT} update={(cache, data) => this.updateCache(cache, data)}>
              
              {( updateDraft ) => {
                console.log("Builder container props: ", this.props)
                return (
                  <Builder user={this.props.user} draftId={this.props.draftId} currentUserId={this.props.currentUserId} draft={data.draft} updateDraft={updateDraft} />
                )
              }}   
            </Mutation>
          )
        }}
      </Query> 
    )
  }
};

export default BuilderContainer;