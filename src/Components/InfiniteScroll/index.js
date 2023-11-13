import {useEffect} from 'react';

const InfiniteScroll = ({handleSetPage, hasMore, loading, children}) => {

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight) {
        handleSetPage(true);
    }
  };

  useEffect(() => {
    if (hasMore) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [hasMore]);

  return (
    <>
      {children}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default InfiniteScroll;
