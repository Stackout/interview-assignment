import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchPerson } from "../../actions/people";
import Spinner from 'app/components/Spinner'
import { cx, css } from 'react-emotion'
import Address from 'app/components/people/Address'
import Colleagues from 'app/components/people/Colleagues'

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

class Person extends Component {



    componentDidMount()
    {
        this.props.dispatch(fetchPerson(this.props.id));

    }

  render(){
    const {error, loading, person} = this.props;

    if(this.props.id == null)
      return (
        <div
        className={cx(
            'd-flex justify-content-center align-items-center',
            styles.personPanel
        )}
        >
        <p className="text-muted">Select a person to view their details.</p>
        </div>

      );

    if(error)
      return <div>Error! {error.message}</div>;
    
    
    if(loading || person == null)
      return (
        <div
        className={cx(
          'd-flex justify-content-center align-items-center',
          styles.personPanel
        )}
      ><Spinner />
      </div>);
  
    var address;
    if(person[0].address != null)
        address = <Address address={person[0].address} />
    else
        address = '';


    var colleagues;
    if(person[0].colleagueIds != null)
        colleagues = <Colleagues colleagueIds={person[0].colleagueIds} />
    else
        colleagues = '';

    return (
      
        
        <div className={cx('d-flex', styles.personPanel)}>
          <div className="p-4">
            <div className={cx('card', styles.personAvatar)}>
              <img
                className="card-img-top"
                src={person[0].gravatarUrl + "?s=400&amp;d=identicon&amp;r=g"}
                alt="Laisha Toy"
              />
            </div>
          </div>
          <div className="p-4">
            <h5>Name</h5>
            <p>{person[0].firstName} {person[0].lastName}</p>
            <h5>Email Address</h5>
            <p>
              <a href="mailto:{person[0].email}">{person[0].email}</a>
            </p>

            {address}
           
            <h5>Colleagues</h5>
            <div className="d-flex flex-column">
            {person[0].colleagueIds.map((cid,keyCol) => 
                <Colleagues cid={cid} key={keyCol}/>
            )}
            </div>
            
          </div>
        </div>

    );

  }

} 

const mapStateToProps = (state) => {
  return{
    person: state.get('person').item,
    loading: state.get('person').loading,
    error: state.get('person').error
  };

};


export default connect(mapStateToProps)(Person);