import React from 'react'
import { connect } from 'react-redux'
import { fetchPeople } from '../../actions/people';
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

export default () => (
  <div className={cx('d-flex', styles.app)}>
    <div className={cx('w-25 border-right', styles.contactListPanel)}>
      <h2 className="p-2 m-0 border-bottom">People</h2>
      <div className={styles.contactList}>
        <div className="list-group">
          {new Array(20).fill().map((_, i) => (
            <a
              key={i}
              href="http://localhost/ch2/people/1"
              className={cx(
                'list-group-item list-group-item-action d-flex align-items-start rounded-0 border-right-0',
                { 'border-top-0': i === 0 }
              )}
            >
              <img
                className={cx('rounded-circle mr-2', styles.contactListAvatar)}
                src="//www.gravatar.com/avatar/54b5d2c3360bdc851e958a4af937cc5a?s=400&amp;d=identicon&amp;r=g"
                alt="Laisha Toy"
              />
              <div className={styles.contactListText}>
                <h5 className="m-0 w-100 d-inline-block text-truncate">
                  Laisha Toy
                </h5>
                <small className="w-100 d-inline-block text-truncate">
                  kanderson@example.net
                </small>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    <div
      className={cx(
        'd-flex justify-content-center align-items-center',
        styles.personPanel
      )}
    >
      <p className="text-muted">Select a person to view their details.</p>
    </div>
  </div>
)
