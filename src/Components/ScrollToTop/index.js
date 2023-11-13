import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

    return (
      <div className={styles.topArrow} onClick={handleScrollTop}>
        <svg viewBox="0 0 32 32" width={20} height={20} className={styles.arrow}>
          <path d="M31.574 22.244l-14.546-14.545c-0.273-0.273-0.643-0.426-1.028-0.426s-0.756 0.153-1.029 0.426l-14.545 14.545c-0.568 0.568-0.568 1.489 0 2.057s1.489 0.568 2.057 0l13.517-13.517 13.517 13.517c0.284 0.284 0.656 0.426 1.029 0.426s0.745-0.142 1.029-0.426c0.568-0.568 0.568-1.489-0-2.057z" />
        </svg>
      </div>
    )
}

export default ScrollToTop;
