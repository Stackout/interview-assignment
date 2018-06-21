import React from 'react'
import { fetchColleague } from "../../actions/people";
import { connect } from "react-redux";


class Colleagues extends React.Component {


    componentDidMount()
    {
      this.props.dispatch(fetchColleague(this.props.cid));
  
    }
  
 

    render(){
  
    const {colleague} = this.props;

    if(colleague == null)
        return <div>Loading...</div>;

        return (
            <div>
                <a href={"http://localhost/ch2/people/" + colleague.id}>{colleague.firstName} {colleague.lastName}</a>
    </div>
        );
        }
    

}


const mapStateToProps = (state) => {
  return{
    colleague: state.get('colleague').item,
  };

};

export default connect(mapStateToProps)(Colleagues);