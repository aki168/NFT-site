import React from 'react'
import MyButton from '../components/MyButton'
import RecommendCard from '../components/RecommendCard'
import {recommend, rank, newWorks, artists} from '../data/worksData'

const MainPage = () => {

  return (
<div className='md:container md:mx-auto py-20'>
{recommend.map( (item,index) => <RecommendCard {...item}/> )}
</div>
  )
}

export default MainPage