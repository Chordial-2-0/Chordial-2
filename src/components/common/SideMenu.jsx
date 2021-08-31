import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../services/auth';
import styles from './sideMenu.css';
import toggle from './toggle.css';
import { useSession } from '../state/SessionProvider';
import { useSideMenu } from '../state/ChordialProvider';

function SideMenu() {
  const history = useHistory();
  const { session, setSession } = useSession();
  const { sideMenu } = useSideMenu();

  const handleClick = () => {
    logout()
      .then(() => {
        setSession(null);
        history.push('/');
      });
  };

  return (
    <div className={sideMenu ? styles.sideMenu : toggle.toggle}>
      <Link to={'/'}>Home</Link>
      {session ? <></> : <Link to={'/login'}>Log In</Link>}
      {session ? <></> : <Link to={'/signup'}>Sign Up</Link>}
      {session ? <Link to={'/saved'}>Saved Sequences</Link> : <></>}
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default SideMenu;