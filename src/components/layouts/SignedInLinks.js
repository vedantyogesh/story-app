import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';
import { connect } from 'react-redux';

function SignedInLinks(props) {
  return (
    <ul className='right'>
      <li>
        {' '}
        <NavLink to='/'> </NavLink>
      </li>
      <li>
        {' '}
        <NavLink to='/create'> New Story </NavLink>
      </li>
      <li>
        {' '}
        <a href='#' onClick={props.signOut}>
          {' '}
          Log Out{' '}
        </a>
      </li>
      <li>
        {' '}
        <NavLink to='/' className='btn btn-floating blue lighten-1'>
          {' '}
          {props.profile.initials}{' '}
        </NavLink>
      </li>
    </ul>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
