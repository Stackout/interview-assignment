import React from 'react'
import { connect } from 'react-redux'
import PeopleList from './PeopleList';
import Person from './Person';
import { cx, css } from 'react-emotion'

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

export default ({match}) => (
  <div className={cx('d-flex', styles.app)}>
    <div className={cx('w-25 border-right', styles.contactListPanel)}>
      <h2 className="p-2 m-0 border-bottom">People</h2>
      <div className={styles.contactList}>
        <PeopleList />
      </div>
    </div>
    <Person id={match.params.id} />
    

  </div>
)
