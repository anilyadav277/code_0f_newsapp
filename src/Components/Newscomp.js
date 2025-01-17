import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import InfiniteScroll from "react-infinite-scroll-component";

export default class Newscomp extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Sophie Tanno, Radina Gigova",
            "title": "6 killed as heaviest rain in decades hits parts of central and eastern Europe - CNN",
            "description": "At least four people have died, thousands of homes have been damaged and hundreds have been evacuated from homes after flooding struck central and eastern Europe on Saturday",
            "url": "https://www.cnn.com/2024/09/14/europe/deadly-rains-flooding-europe-central-eastern-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2171082066.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-09-15T09:48:00Z",
            "content": "At least six people have died after some of the heaviest rain in years hit central and eastern Europe, causing flooding and widespread disruption.\r\nA slow-moving low pressure system dubbed Storm Bori… [+2669 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Michael David Smith",
            "title": "Tua Tagovailoa will meet with neurologists this week as he assesses his future - NBC Sports",
            "description": "Dolphins quarterback Tua Tagovailoa is seeking expert opinions as he weighs what his future is in football.",
            "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/tua-tagovailoa-will-meet-with-neurologists-this-week-as-he-assesses-his-future",
            "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/2fbcea1/2147483647/strip/true/crop/3668x2063+0+191/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F1f%2F02%2F8a9a1ed74f9087acf835c1e2656e%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2171977493",
            "publishedAt": "2024-09-15T09:43:15Z",
            "content": "Dolphins quarterback Tua Tagovailoa is seeking expert opinions as he weighs what his future is in football.\r\nTagovailoa is meeting with neurologists early this week and will seek their opinions about… [+948 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "ABC News",
            "title": "California Wildfires updates: Firefighters score success in containment battle - ABC News",
            "description": null,
            "url": "https://abcnews.go.com/US/california-wildfires-updates-firefighters-score-success-containment-battle/story?id\\\\u003d113697060",
            "urlToImage": null,
            "publishedAt": "2024-09-15T09:22:55Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Mauricio Torres",
            "title": "Venezuela says US Navy SEAL among foreigners arrested over alleged CIA ‘operation’ to assassinate Maduro - CNN",
            "description": "Venezuela says it has arrested six foreigners, including a US Navy SEAL, for an alleged plot to “destabilize” the country that has been in crisis since disputed elections earlier this year.",
            "url": "https://www.cnn.com/2024/09/14/americas/venezuela-arrests-americans-seizes-rifles-intl-latam/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1230440890.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-09-15T09:16:00Z",
            "content": "Venezuela says it has arrested six foreigners, including a US Navy SEAL, for an alleged plot to destabilize the country that has been in crisis since disputed elections earlier this year.\r\nInterior m… [+3921 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jessie Yeung",
            "title": "Missile from Yemen lands in central Israel, an area normally safe from enemy projectiles - CNN",
            "description": "A missile was launched from Yemen into central Israel on Sunday morning, according to the Israeli military, in a rare instance of a missile penetrating so far into the country’s territory since its war in Gaza began.",
            "url": "https://www.cnn.com/2024/09/15/middleeast/israel-missile-yemen-gaza-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-09-15t055303z-1057770746-rc2t0aau7gzj-rtrmadp-3-israel-palestinians-yemen-missiles.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-09-15T09:14:00Z",
            "content": "Yemens Houthi rebels fired a missile into central Israel on Sunday morning, a rare instance of a missile penetrating far into the countrys territory since its war in Gaza began.\r\nThe projectile cross… [+4231 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Aaron Gregg",
            "title": "SpaceX’s Polaris Dawn spaceflight ends with splashdown off Florida - The Washington Post",
            "description": "The mission was commissioned by billionaire Jared Isaacman, who made a fortune as the founder of Shift4 Payments, and did not involve NASA.",
            "url": "https://www.washingtonpost.com/technology/2024/09/15/spacex-polaris-dawn-mission-spacewalk/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QECS7U5D5JAFYOO4XJCZQ4LHLQ.jpg&w=1440",
            "publishedAt": "2024-09-15T08:02:06Z",
            "content": "The five-day space voyage known as Polaris Dawn was completed safely on Sunday as four astronauts aboard a SpaceX Dragon splashed down off the coast of Florida, wrapping up a groundbreaking commercia… [+3225 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ashley Hume",
            "title": "Ben Affleck, Jennifer Lopez spotted together for first time since divorce filing on outing with their kids - Fox News",
            "description": "Ben Affleck and Jennifer Lopez were spotted together for the first time since news of their divorce filing broke last month, when they joined their kids at the Beverly Hills Hotel.",
            "url": "https://www.foxnews.com/entertainment/ben-affleck-jennifer-lopez-spotted-together-first-time-outing-kids-beverly-hills",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/jlo_benbh.jpg",
            "publishedAt": "2024-09-15T07:40:00Z",
            "content": "Ben Affleck and Jennifer Lopez were spotted together Saturday for the first time since the \"On the Floor\" hitmaker filed for divorce from the Oscar winner last month.\r\nThe 52-year-old actor and the 5… [+3432 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "Mathew Murphy",
            "title": "WATCH: Iconic Rock Band Jane’s Addiction Starts Brawling at Reunion Concert - The Daily Beast",
            "description": "Jane’s Addiction singer Perry Farrell was singing before walking over to guitarist Dave Navarro and throwing a punch at him mid-song and sparking a brawl.",
            "url": "https://www.thedailybeast.com/watch-iconic-rock-band-janes-addiction-start-brawling-at-reunion-concert",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_748,w_1332,x_0,y_41/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1726319134/Jane_yx6hyg",
            "publishedAt": "2024-09-15T07:28:38Z",
            "content": "Janes Addiction frontman Perry Farrell attacked guitarist Dave Navarro during a bizarre onstage outburst which saw crew members drag him offstage and abruptly end the bands Boston concert on Friday n… [+2586 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Zak Doffman",
            "title": "Samsung Updates Millions Of Galaxy Phones To Stop Users Leaving - Forbes",
            "description": "Samsung adds new security to stop you buying a new iPhone 16 Pro or Google Pixel 9 Pro.",
            "url": "https://www.forbes.com/sites/zakdoffman/2024/09/15/samsung-galaxy-update-stop-users-buying-iphone-16-pro-google-pixel-9-pro/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6645bf2f5153e46c85df85cb/0x0.jpg?format=jpg&crop=1586,1131,x155,y67,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-15T06:45:37Z",
            "content": "New boost for millions of Galaxy users\r\nAFP via Getty Images\r\nDespite Googles best efforts, Samsung remains the closest Android alternative to iPhone, and the Korean manufacturer and Apple essentiall… [+4418 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Official Website of the Ultimate Fighting Championship"
            },
            "author": null,
            "title": "Main Card Results | UFC 306: O'Malley vs Dvalishvili - UFC",
            "description": "See The Fight Results, Watch Post-Fight Interviews With The Main Card Winners And More From UFC 306: O'Malley vs Dvalishvili, Live From Sphere In Las Vegas, Nevada",
            "url": "https://www.ufc.com/news/main-card-results-highlights-winner-interviews-ufc-306-omalley-vs-dvalishvili-noche-ufc-sphere",
            "urlToImage": "https://dmxg5wxfqgb4u.cloudfront.net/styles/card/s3/2024-08/091424-ufc-306-omalley-vs-dvalishvili-EVENT-ART.jpg?itok=3xVkbfyw",
            "publishedAt": "2024-09-15T06:22:30Z",
            "content": "The five-fight extravaganza featured an impressive comeback, an all-out fire fight, and a dominant effort from one of the most exciting ascending talents in the sport. And then the action shifted to … [+1320 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suntimes.com"
            },
            "author": "Georgia Nicols",
            "title": "Horoscope for Sunday, September 15, 2024 - Chicago Sun-Times",
            "description": null,
            "url": "https://chicago.suntimes.com/horoscopes/2024/09/15/horoscopes-today-sunday-september-15-2024",
            "urlToImage": "https://cst.brightspotcdn.com/dims4/default/2145dbd/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fchorus-production-cst-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fac%2Ffd%2F790f04b15195427014757adc0272%2Fgeorgia-nicols.jpg",
            "publishedAt": "2024-09-15T05:02:47Z",
            "content": "Moon Alert\r\nThere are no restrictions to shopping or important decisions. The moon is in Aquarius.\r\nAries (March 21-April 19)\r\nThis is a marvelous day to socialize! Plus, romance is beautifully favou… [+3909 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "JIM VERTUNO",
            "title": "Texas QB Quinn Ewers departs with strained abdomen and Arch Manning leads win over UTSA - The Associated Press",
            "description": "Texas quarterback Quinn Ewers departed the No. 2 Longhorns’ 56-7 win over UTSA in the second quarter with a strained abdomen. Ewers was on the sideline in street clothes by halftime as Texas led 28-7. Coach Steve Sarkisian noted the injury was not caused by c…",
            "url": "https://apnews.com/article/texas-ewers-manning-5814b956c10e31fc82e4acc9d6459814",
            "urlToImage": "https://dims.apnews.com/dims4/default/3725a47/2147483647/strip/true/crop/5015x2821+0+139/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9a%2F32%2Fe48445a9fdf4f4c91d55d19341b8%2Fcf55e8f1bc3f4bf5a2e7832d90acd8a1",
            "publishedAt": "2024-09-15T04:34:00Z",
            "content": "AUSTIN, Texas (AP) For the third time in three seasons, Texas quarterback Quinn Ewers is injured and looking at some time on the sideline.\r\nEwers departed the No. 2 Longhorns 56-7 win over UTSA in th… [+1681 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "Typhoon Yagi leaves at least 74 dead in Myanmar after flooding and landslides - CNN",
            "description": "At least 74 people have died and scores more are still missing in Myanmar following heavy flooding and landslides caused by Typhoon Yagi, state media reported on Sunday.",
            "url": "https://www.cnn.com/2024/09/15/asia/typhoon-yagi-myanmar-deaths-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2171049044.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-09-15T04:17:00Z",
            "content": "At least 74 people have died and scores more are still missing in Myanmar following heavy flooding and landslides caused by Typhoon Yagi, state media reported on Sunday.\r\nThe flooding across the civi… [+1388 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TheStreet"
            },
            "author": "Charley Blaine",
            "title": "Fed's rate decision will rock markets this week - TheStreet",
            "description": "After the central bank cuts its key interest rate on Wednesday, here's what happens next.",
            "url": "https://www.thestreet.com/investing/stocks/feds-rate-decision-will-rock-markets-this-week",
            "urlToImage": "https://www.thestreet.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjA5MTQ0OTQzNTAxOTExNjY0/federal-reserve-chair-powell-holds-a-news-conference-following-the-federal-open-market-committee-meeting.jpg",
            "publishedAt": "2024-09-15T04:11:13Z",
            "content": "It seems like economists, traders, politicians, and financial journalists have been waiting forever for the Federal Reserve to start cutting U.S. interest rates.\r\nActually, it's been 14 months since … [+5437 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "ANDREW DALTON",
            "title": "'Shogun,' 'The Bear' and 'Baby Reindeer' are at the top of the queue as the Emmys arrive - Yahoo Entertainment",
            "description": "LOS ANGELES (AP) — “Shogun” could be in for an epic night, “The Bear” could clean up for the second time in less than a year, and “Baby Reindeer” has gone...",
            "url": "https://www.yahoo.com/entertainment/shogun-bear-baby-reindeer-top-040348436.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/4NBbI9Luy63n8tZmbpbUNA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MzM-/https://media.zenfs.com/en/ap.org/470ab9a8a8ee6d91f7e7d26b4b496bef",
            "publishedAt": "2024-09-15T04:03:00Z",
            "content": "LOS ANGELES (AP) Shogun could be in for an epic night, The Bear could clean up for the second time in less than a year, and Baby Reindeer has gone from dark horse to contender as the 76th Primetime E… [+4416 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "POLITICO",
            "title": "Amid mushrooming scandal, Eric Adams’ City Hall attorney steps down - POLITICO",
            "description": null,
            "url": "https://www.politico.com/news/2024/09/14/amid-mushrooming-scandal-eric-adams-city-hall-attorney-steps-down-00179213",
            "urlToImage": null,
            "publishedAt": "2024-09-15T03:46:56Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Two dozen killed in Haiti tanker truck explosion - CBS News",
            "description": "The explosion in Miragoane, Haiti, also injured about 40 people, with some suffering burns over most of their bodies, officials said.",
            "url": "https://www.cbsnews.com/news/haiti-tanker-truck-explosion-dozens-killed-injured-miragoane/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/01/27/ce74b848-48f6-403d-947d-ba223f37d176/thumbnail/1200x630/c00af4d4fa1b3b9a616897b4d3f5e496/gettyimages-1354821469.jpg?v=d2d77bee90bcafa285fd6d60bd8b3612",
            "publishedAt": "2024-09-15T02:29:58Z",
            "content": "A tanker truck exploded Saturday in southwestern Haiti, killing 24 people, authorities said, as witnesses reported that victims had been trying to collect fuel leaking from the vehicle.\r\n The explosi… [+1258 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Brie Stimson",
            "title": "Disney, DirecTV reach deal to restore ESPN, ABC, other networks as college, pro football seasons ramp up - Fox Business",
            "description": "Disney and DirecTV have reached a deal for a new licensing agreement, ending the two-week blackout of its sports and entertainment channels.",
            "url": "https://www.foxbusiness.com/entertainment/disney-directv-reach-deal-restore-espn-abc-networks-college-pro-football-seasons-ramp-up",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/09/0/0/disney-espn.jpg?ve=1&tl=1",
            "publishedAt": "2024-09-15T02:10:00Z",
            "content": "Disney and DirecTV announced on Saturday they had reached a deal to restore its \"entire portfolio of networks,\" including ESPN and ABC, to the satellite provider following a two-week blackout. \r\nThe … [+2623 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Anna Young",
            "title": "Two Springfield, Ohio, hospitals locked down as more bomb threats rock city amid migrant crisis tensions - New York Post ",
            "description": "It was the third consecutive day of bomb threats made in the city.",
            "url": "https://nypost.com/2024/09/14/us-news/2-springfield-ohio-hospitals-locked-down-over-bomb-threats/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/09/89705961.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-09-15T02:06:00Z",
            "content": "Another bomb threat in Springfield, Ohio, forced two hospitals into lockdown Saturday morning as the small city of about 60,000 continues to endure heightened national attention and threats over the … [+4672 chars]"
        }
    ]

    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'health'
      }
    static propTypes = {
        category: PropTypes.string,
        country: PropTypes.string,
        pageSize: PropTypes.number
      }
      capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1)
      }

    constructor(props) {
        super(props);
        this.state = {
            // articles: this.articles,
            page: 1 ,
            articles: [],
            loading : true
 };
        document.title = `${this.capitalizeFirstLetter(this.props.category)}-NEWS421`
    }
    async componentDidMount() {
        try {
            this.props.setProgress(11)
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=02bccd5e27fe48b395705cd4a10390b5&page=1&pageSize=20`;
          this.props.setProgress(47)
          let data = await fetch(url);
          this.props.setProgress(67)
          let jsonData = await data.json();
          this.props.setProgress(87)
          this.setState({ articles: jsonData.articles,totalResults :jsonData.totalResults });
          this.props.setProgress(100)
        } catch (error) {
          console.error("Error fetching the news:", error);
        }
      }
      fetchMoreData = async() => {
        this.setState({ page : this.state.page +1  });
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=02bccd5e27fe48b395705cd4a10390b5&page=1&pageSize=20`;
            let data = await fetch(url);
            let jsonData = await data.json();
            this.setState({  articles: this.state.articles.concat(jsonData.articles)
                ,totalResults :jsonData.totalResults });
          } catch (error) {
            console.error("Error fetching the news:", error);
          }
        
      };






//       handletonext = async () => {
//     if(this.state.page +1 >Math.ceil(this.state.totalResults / 20)){}else{
//         console.log(Math.ceil(this.state.totalResults / 20))
   
//     try {
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=02bccd5e27fe48b395705cd4a10390b5&page=${this.state.page +1}&pageSize=20`;
//         let data = await fetch(url);
//         let jsonData = await data.json();
//         this.setState({ articles: jsonData.articles,
//            page : this.state.page +1
          
//          });
//          console.log(this.state.page)
//       } catch (error) {
//         console.error("Error fetching the news:", error);
//       }
//     }
// }




    //   handletoprev = async () => {
    
    // try {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=02bccd5e27fe48b395705cd4a10390b5&page=${this.state.page -1}&pageSize=20`;
    //     let data = await fetch(url);
    //     let jsonData = await data.json();
    //     this.setState({ articles: jsonData.articles,
    //        page : this.state.page -1
          
    //      });
    //      console.log(this.state.page)
    //   } catch (error) {
    //     console.error("Error fetching the news:", error);
    //   }
    // }

render() {
    return (
        <>
          <Navbar></Navbar>
          
            <div className="container  my-3">
            <h1>News9-10 - Top Headlinens From {this.capitalizeFirstLetter(this.props.category)}</h1>
          
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader ={<spinner/>}
        > <div className="row ">
                {this.state.articles.map((element) => {
                    // console.log(element)
                    return (
                        <div className="col-md-4 my-3" key={element.url}>
                            <Newsitem
                                title={element.title}
                                description={element.description}
                                imageurl={element.urlToImage}
                                url={element.url}
                                author = {element.author}
                                date = {element.publishedAt}

                            />
                        </div>
                    );
                })}
            </div>
            </InfiniteScroll>
            </div>
            {/* <div className="container d-flex justify-content-between ">
                <button disabled = {this.state.page <=1} onClick={this.handletoprev} type="button" className=" btn btn-dark">&larr; prev</button>
                <button disabled = {this.state.page+1 >Math.ceil(this.state.totalResults / 20)}onClick={this.handletonext} type="button" className=" btn btn-dark">next &rarr;</button>
            </div> */}
        </>
    );
}
}