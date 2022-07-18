import styles from './useDisableScrollBounce.module.css'
import { useEffect } from 'react'

export default function useDisableScrollBounce() {
  useEffect(() => {
    // Disable scroll bounce on window to make the panning work properly
    document.body.classList.add(styles.no_scroll)
    return () => {
      document.body.classList.remove(styles.no_scroll)
    }
  }, [])
}
