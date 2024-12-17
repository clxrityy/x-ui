import { RiMenuFoldLine, RiMenuFold4Line } from 'react-icons/ri'
import { HiCursorClick } from 'react-icons/hi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export const ICONS = {
  OPEN_MENU: RiMenuFoldLine,
  CLOSE_MENU: RiMenuFold4Line,
  CLICK: HiCursorClick,
  LOADING: AiOutlineLoading3Quarters,
  ARROW_DOWN: IoIosArrowDown,
  ARROW_UP: IoIosArrowUp,
}

export const URLS = {
  ipify: 'https://api.ipify.org?format=json',
  ip_api: 'http://ip-api.com/json',
  weather: 'https://api.open-meteo.com/v1/forecast',
}
