import {useCallback, useEffect, useState} from 'react';
import ArticleCard from '../ArticleCard';
import InfiniteScroll from '../InfiniteScroll'
import {fetchArticles} from '../../api/fetchArticles';
import styles from './ArticlesList.module.css';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const getArticles = async () => {
    try {
      setLoading(true);
      const nodes = await fetchArticles(page);
      setArticles((prevState) => [...prevState, ...nodes]);
      setHasMore(nodes.length > 0);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }

  const handleSetPage = useCallback(function(isNextPage) {
    if (isNextPage) {
      setPage((prevPeg) => prevPeg + 1);
    }
  }, []);

  useEffect(() => {
    getArticles();
  }, [page]);

  return (
    <div className={styles.listContainer}>
      <h1>Articles</h1>
      <InfiniteScroll
        handleSetPage={handleSetPage}
        hasMore={hasMore}
        loading={loading}
      >
        {articles.map((article, key) => (
          <ArticleCard article={article} key={key} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default ArticlesList;
