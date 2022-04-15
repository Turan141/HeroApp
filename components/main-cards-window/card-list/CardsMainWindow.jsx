import { SearchPanel } from '../search-panel/SearchPanel'
import { CardList } from './card-list/CardList'

import style from './CardsMain.module.scss'


export const CardsMainWindow = ({ heroes }) => {
  return (
    <div className={style.cards__main}>
      <SearchPanel />
      <CardList heroes={heroes} />
    </div>
  )
}
