import React, { Component, Anim } from 'react'
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <div class="sticky-footer">
            
      <section class="newsletter">
        <form action="https://canadalearningcode.us2.list-manage.com/subscribe/post" method="POST">
          <input type="hidden" name="u" value="ffce8cb0bd8c24faff9817f63"/>
          <input type="hidden" name="id" value="8e2c6e3dea"/>
          <div class="container container--tight">
            <div class="newsletter-info">
                        <h2 class="u-marginBottomSmall">Join Our Mailing List</h2>
              
                        <p>Be the first to hear more about upcoming events, initiatives and partnership opportunities.</p>
                    </div>
            <div class="combo combo--rev combo--middle combo--stack--phablet">
              <div class="combo-first u-marginBottomSmall--phablet">
                <div class="grid grid--middle">
                  <div class="grid-1of3 grid-1of1--phablet">
                    <div class="input">
                                        <label for="MERGE1">First Name</label>
                      
                      <input type="text" name="MERGE1" id="MERGE1" value=""/>
                    </div>
                  </div>
                  <div class="grid-1of3 grid-1of1--phablet">
                    <div class="input">
                                        <label for="MERGE2">Last Name</label>
                      
                      <input type="text" name="MERGE2" id="MERGE2" value=""/>
                    </div>
                  </div>
                  <div class="grid-1of3 grid-1of1--phablet">
                    <div class="input">
                                        <label for="MERGE0">Email Address</label>
                      
                      <input type="email" name="MERGE0" id="MERGE0" value=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="combo-last">
                <input type="submit" value="subscribe"/>
              </div>
            </div>
          </div>
        </form>
      </section>
      <footer class="footer">
        <div class="container container--tight">
          <div class="footer-top">
            <div class="grid">
              <div class="grid-7of12 grid-1of1--palm">
<img class="footer-logo" src="https://www.canadalearningcode.ca/wp-content/uploads/clc-logo-1.svg" alt="clc logo"/>
                        </div>
              <div class="grid-5of12 grid-1of1--palm">
                <div class="grid">
                  <div class="grid-2of3 grid-1of2--palm">
                    <div class="menu-footer-nav-container"><ul id="menu-footer-nav" class="menu"><li id="menu-item-3292" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3292"><a href="https://www.canadalearningcode.ca/contact-us/">Contact Us</a></li>
      <li id="menu-item-421" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-421"><a href="https://www.canadalearningcode.ca/sponsor-us/">Sponsors</a></li>
      <li id="menu-item-1556" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1556"><a href="http://canadalearningcode.nonprofitsoapbox.com/clc-donate">Donate</a></li>
      <li id="menu-item-422" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-422"><a href="https://www.canadalearningcode.ca/blog/">Blog</a></li>
      <li id="menu-item-1481" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1481"><a href="http://jobs.canadalearningcode.ca/">Job Board</a></li>
      </ul></div>            </div>
                  <div class="grid-1of3 grid-1of2--palm">
                                    <ul class="footer-social">
                                                                                                          <li>
                              <a href="https://www.facebook.com/canadalearningcode" target="_blank">
                                <img src="https://www.canadalearningcode.ca/wp-content/uploads/social-facebook.svg" alt=""/>
                                Facebook                        </a>
                            </li>
                                                                                                                              <li>
                              <a href="https://twitter.com/learningcode" target="_blank">
                                <img src="https://www.canadalearningcode.ca/wp-content/uploads/social-twitter.svg" alt=""/>
                                Twitter                        </a>
                            </li>
                                                                                                                              <li>
                              <a href="https://www.linkedin.com/company/canadalearningcode/" target="_blank">
                                <img src="https://www.canadalearningcode.ca/wp-content/uploads/linkedin.svg" alt=""/>
                                LinkedIn                        </a>
                            </li>
                                                                                                                              <li>
                              <a href="https://www.instagram.com/learningcode" target="_blank">
                                <img src="https://www.canadalearningcode.ca/wp-content/uploads/social-instagram.svg" alt=""/>
                                Instagram                        </a>
                            </li>
                                                                                                                              <li>
                              <a href="https://www.youtube.com/channel/UCN5LKYOeCMBmmFYUhUeJfdQ" target="_blank">
                                <img src="https://www.canadalearningcode.ca/wp-content/uploads/social-youtube.svg" alt=""/>
                                YouTube                        </a>
                            </li>
                                                            </ul>
                                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="footer-bottom">
          <div class="container container--tight">
            <div class="combo combo--rev combo--middle combo--stack--portable">
              <div class="combo-first">
                <p class="footer-copyright">
                  © Copyright 2018. All rights reserved.          </p>
                <p class="footer-copy">
                  CHARITABLE REGISTRATION NO. 834394108RR0001
                </p>
              </div>
              <div class="combo-last">
                <div class="menu-secondary-footer-container"><ul id="menu-secondary-footer" class="menu"><li id="menu-item-1482" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1482"><a href="https://www.canadalearningcode.ca/code-of-conduct/">Code of Conduct</a></li>
      <li id="menu-item-2968" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2968"><a href="https://www.canadalearningcode.ca/diversity-and-inclusion/">Diversity and Inclusion</a></li>
      <li id="menu-item-1483" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1483"><a href="https://www.canadalearningcode.ca/privacy-policy/">Privacy Policy</a></li>
      <li id="menu-item-1484" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1484"><a href="https://www.canadalearningcode.ca/terms-conditions/">Terms &#038; Conditions</a></li>
      <li id="menu-item-1489" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1489"><a href="https://www.canadalearningcode.ca/refund-policy/">Refund Policy</a></li>
      </ul></div>        </div>
            </div>
          </div>
        </div> */}
      </footer>
      

        </div>
    )
  }
}

export default Footer