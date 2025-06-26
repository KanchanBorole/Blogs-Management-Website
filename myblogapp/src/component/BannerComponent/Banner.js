import {Link} from 'react-router-dom';

function Banner(){
    return(
        <>
           {/* banner post start*/}
    <section class="banner_post">
        <div class="container-fluid">
            <div class="row justify-content-between">
                <div class="banner_post_1 banner_post_bg_1" >
                    <div class="banner_post_iner text-center">

                        <a ><h5> Fashion / Life style</h5></a> 
                        <a ><h2 ><Link to="https://influencermarketinghub.com/best-fashion-blogs/">The Fashion Guitar</Link></h2></a> 
                        <p>Posted on June 15, 2025</p>
                    </div>
                </div><div class="banner_post_1 banner_post_bg_2">
                    <div class="banner_post_iner text-center">
                        <a ><h5>Technology / Trends</h5></a> 
                        <a ><h2><Link to="https://www.technewsworld.com/story/the-tangled-web-copyright-ai-and-the-content-id-conundrum-179770.html">The Tangled Web</Link></h2></a> 
                        <p>Posted on June 12, 2025</p>
                    </div>
                </div>
                <div class="banner_post_1 banner_post_bg_3">
                
                    <div class="banner_post_iner text-center">
                        <a ><h5> Parenting Blog</h5></a> 
                        <a ><h2><Link to="https://www.positiveparentingsolutions.com/time-management-for-kids/">Manage time for child</Link></h2></a> 
                        <p>Posted on June 22, 2025</p>
                    </div>
                </div>
            </div>
            </div>
        
    </section>
    {/* banner post end*/}
        </>
    )
}

export default Banner;