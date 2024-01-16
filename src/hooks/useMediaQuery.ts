import { useEffect, useMemo, useState } from 'react'
import { Sizes } from '../helpers/sizes'

export function useMediaQuery(direction: 'max' | 'min', size: Sizes): boolean {
  const screenWidth = direction === 'min' ? size + 'px' : size - 1 + 'px'

  const query = useMemo(() => `(${direction}-width:${screenWidth})`, [direction, screenWidth])

  const getMatches = (query: string): boolean => {
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()
    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}
