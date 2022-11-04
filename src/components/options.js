import React from 'react';

export default function Options(){
    return(
        <div className='optionsArea'>
            <div className='optionButton'>
        <h3 className='home'>
            Home
        </h3>
        <h3 className='calender'>
            calender
        </h3>
        <h3 className='aboutUs'>
            About Us
        </h3>
        <h3>
            Blog
        </h3>
        </div>

        <div className='socails'>
            <p>socials</p>
            
                <div className='twitter'><img src="https://cdn2.iconfinder.com/data/icons/social-media-2151/512/12_Media_social_website_Twitter-128.png" alt='twitter' className='twitter-img' /><a href='https://twitter.com/Kalio_Prince' className='twitterr'>twitter</a></div>
                <div className='twitter'><img src="https://cdn4.iconfinder.com/data/icons/various-icons-2/476/YouTube.png" alt='twitter' className='twitter-img' /><a href='https://twitter.com/Kalio_Prince' className='twitterr'>Youtube</a></div>
                <div className='twitter'><img src="https://cdn4.iconfinder.com/data/icons/various-icons-2/476/YouTube.png" alt='twitter' className='twitter-img' /><a href='https://twitter.com/Kalio_Prince' className='twitterr'>Youtube</a></div>
        </div>

        </div>
    )

}