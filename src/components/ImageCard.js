import React from 'react';



const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  
  var view_salary  = 0 ; 
  var  download_Salary = 0 ; 
  var  numberView  = image.views;
  
  return (
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
     
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}

          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
         
          <li>
          <div class="myDiv">
          <li>
            <strong>Payment in US Dollar based on views : </strong>
            {image.views <1000 ? "$0" : '$'+( image.views /1000)*5 }
           

          </li>
         
           

            </div>

          </li>         
        </ul>
      </div>
      
    </div>
  )
  }

export default ImageCard; 
