import React from 'react'
import moment from 'moment';
import {formatInTimeZone} from 'date-fns-tz';
import enIN from 'date-fns/locale/en-IN';
import styles from './ArticleCard.module.css';

const ArticleCard = ({article}) => {
  const {node} = article;

  const formatDate = (date) => {
    return date ? formatInTimeZone(date, 'Asia/Kolkata', 'MMM dd, yyyy HH:mm zzz', {locale: enIN}) : '';
  }

  return (
    <a className={styles.card} href='#'>
      <img src={node?.field_photo_image_section} alt={node?.author_name} />
      <div className={styles.card_content}>
        <h3>{node?.title?.substr(0,70) + '...'}</h3>
        <h5>{formatDate(node?.last_update)}</h5>
      </div>
    </a>
  );
}

export default ArticleCard;
