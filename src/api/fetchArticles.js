export const fetchArticles = async function(page) {
    const apiUrl = `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data?.nodes;
    } catch (error) {
      console.error('Error in fetching articles:', error);
      return null;
    }
  }