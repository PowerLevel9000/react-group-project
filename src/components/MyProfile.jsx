import { useSelector } from 'react-redux';
import styles from '../styles/myproFile.module.css';

const MyProfile = () => {
  const { rocketLists } = useSelector((state) => state.rockets);

  const reserveRockets = rocketLists.filter((rocket) => rocket.reserved && rocket);

  return (
    <div className={styles.container}>
      <div className={styles.rocket}>
        <h2>My Rockets</h2>
        <table className={styles.table}>
          <tbody className={styles.tbody}>
            {reserveRockets.map((rocket) => (
              <tr key={rocket.id} className={styles.tr}>
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyProfile;
