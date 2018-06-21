import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchPeople } from "../../actions/people";
import Spinner from 'app/components/Spinner'
import { cx, css } from 'react-emotion'
import { getPeople } from '../../selectors/people';

const styles = {
  app: css`
    height: 100vh;
    width: 100vw;
  `,
  contactListPanel: css`
    min-width: 250px;
    max-width: 350px;
  `,
  contactList: css`
    height: calc(100vh - 55px);
    overflow-y: scroll;
  `,
  contactListAvatar: css`
    width: 50px;
  `,
  contactListText: css`
    width: calc(100% - 42px);
  `,
  personPanel: css`
    flex-grow: 2;
  `,
  personAvatar: css`
    width: 250px;
  `,
}


class PeopleList extends Component {

  componentDidMount()
  {
    this.props.dispatch(fetchPeople());

  }

  render(){

    const {error, loading, people} = this.props;

    if(error)
      return <div>Error! {error.message}</div>;
    
    if(loading)
      return <Spinner />;
  

    return (
      <div className="list-group">
        
{people.map((person,i) =>
  <a
  key={i}
  href={"/ch2/people/" + person.id}
  className={cx(
    'list-group-item list-group-item-action d-flex align-items-start rounded-0 border-right-0',
    { 'border-top-0': i === 0 }
  )}
>
  <img
    className={cx('rounded-circle mr-2', styles.contactListAvatar)}
    src={person.gravatarUrl + "?s=400&amp;d=identicon&amp;r=g"}
    alt="Laisha Toy"
  />
  <div className={styles.contactListText}>
    <h5 className="m-0 w-100 d-inline-block text-truncate">
      {person.firstName} {person.lastName}
    </h5>
    <small className="w-100 d-inline-block text-truncate">
      {person.email}
    </small>
  </div> 
</a>

)}      

      </div>
    );
  }

} 

const mapStateToProps = (state) => {
  return{
    people: state.get('people').items,
    loading: state.get('people').loading,
    error: state.get('people').error
  };

};


export default connect(mapStateToProps)(PeopleList);