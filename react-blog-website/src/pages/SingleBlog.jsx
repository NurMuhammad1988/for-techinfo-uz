import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBlog = () => {

    const data= useLoaderData();
    const {title, image, category,author,published_date,reading_time,} = data [0]

    // console.log(data);//blogslarga id berishdan oldin consoleda ko'rish uchunyozildi yani linkga o'tadi lekin ekranda ko'rinmeydi

  return (
    <div>SingleBlog</div>
  )
}

export default SingleBlog