import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../redux/hooks'
import {
  setScrollStatus,
  setScrollTopDetails,
} from '../../../redux/slice/newsSlice'

const useScrollEnd = (
  refElem,
  onScrollEnd,
  dataTotalCount,
  paginationNumber
) => {
  const [scrollDir, setScrollDir] = useState(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    let sc = refElem.current

    setTimeout(() => {
      if (sc && paginationNumber == 1) {
        sc.scrollTop = 0
      }
    }, 500)
  }, [paginationNumber])

  useEffect(() => {
    let sc = refElem.current

    function updateScrollPosition() {
      scrollDir > sc.scrollTop && setScrollDir(sc.scrollTop)

      scrollDir < sc.scrollTop && setScrollDir(sc.scrollTop - 10)

      dispatch(setScrollStatus(scrollDir < sc.scrollTop))
      dispatch(setScrollTopDetails(sc.scrollTop))

      if (sc && sc.offsetHeight + sc.scrollTop >= sc.scrollHeight - 40) {
        if (paginationNumber <= dataTotalCount / 10) {
          setTimeout(() => onScrollEnd(paginationNumber + 1), 100)
        }
      }
    }

    if (refElem && sc) {
      sc.addEventListener('scroll', updateScrollPosition, false)
    }

    return function cleanup() {
      sc && sc.removeEventListener('scroll', updateScrollPosition, false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })
}

export default useScrollEnd
