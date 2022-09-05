import React from 'react'
import MyButton from '../components/MyButton'
import RecommendCard from '../components/RecommendCard'
import {recommend, rank, newWorks, artists} from '../data/worksData'

const MainPage = () => {

  return (
<>
{recommend.map( (item,index) => <RecommendCard {...item}/> )}
</>
  )
}

export default MainPage