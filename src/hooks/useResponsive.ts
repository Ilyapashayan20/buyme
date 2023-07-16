import { useWindowSize } from '@react-hook/window-size'

const useResponsive = () => {
  const [width] = useWindowSize()

  const isWide = width > 1024 && width < 1256

  const isLaptop = width < 1024

  const isTabletLarge = width < 992

  const isTablet = width < 876

  const isMobile = width < 665

  return { isLaptop, isTabletLarge, isTablet, isMobile, isWide }
}

export default useResponsive
