import css from './profile.module.css';
export default function Profile({ username, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt="User avatar" className={css.avatar} width="180" height="180" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.itemli}>
          <span className={css.label}>Followers </span>
          <span className={css.value}>{stats ? stats.followers : 0}</span>
        </li>
        <li className={css.itemli}>
          <span className={css.label}>Views</span>
          <span className={css.value}>{stats ? stats.views : 0}</span>
        </li>
        <li className={css.itemli}>
          {' '}
          <span className={css.label}>Likes</span>
          <span className={css.value}>{stats ? stats.likes : 0}</span>
        </li>
      </ul>
    </div>
  );
}
