import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// You need three components:


// Header-
// -in this you contains logo
// -Nav items
// Body 
// -Search Bar
// Restaurant container 
// -- Restaurant Card 
// image
// star rating
//cuisines 
//etc

// Footer-

// Copyrights
// Links
// Address
// Contact


// const jsxHeading=(<h1 className="head" 
// tabIndex="5 delievery time" >Namaste React using JSX</h1>);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// const Title=()=>(
//     <h1 className="head">
//         Title Component
//     </h1>
// )

// const number=1000;

// const HeadingComponent=()=>(
//     <div id="container">
//         {Title()}
//         {/* this is aslo written i */}
//         {number}
//      <h1 className="heading">Aryan Sachan Sachan</h1>
//     </div>
// )


const styleCard={
    backgroundColor: "#f0f0f0"
}

// this second method is called destructure
// const RestaurantCard=({esName,cuisines})=>{
    // const{resName,cuisines}=props
//     return(
//         <div className="res-card" style={styleCard}>
//             <img  className= "res-logo" alt= "res-logo" src="https://th.bing.com/th/id/R.38cfd8403144119e8d3e3d176a963016?rik=aIKV8RSzKHPIKw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fDesktop-Food-HD-Wallpapers-Free-Download.jpg&ehk=szmS7%2bieRDd4VVw82%2fkxoSha9HiVHqUNAZr02wqxugc%3d&risl=1&pid=ImgRaw&r=0">

//             </img>
//             <h3>{resName}</h3>
//             <h4>{cuisines}</h4>
//             <h5>4.4 stars</h5>
//             <h6>Delievery time</h6>
//         </div>
//     )
// // }
//  const resObj=[
//  {
//    "info": {
//      "id": "23846",
//      "name": "Domino's Pizza",
//      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
//      "locality": "Rehinus Street",
//      "areaName": "Richmond Town",
//      "costForTwo": "₹400 for two",
//      "cuisines": [
//        "Pizzas",
//        "Italian",
//        "Pastas",
//        "Desserts"
//      ],
//      "avgRating": 4.4,
//      "parentId": "2456",
//      "avgRatingString": "4.4",
//      "totalRatingsString": "10K+",
//      "sla": {
//        "deliveryTime": 25,
//        "lastMileTravel": 2.6,
//        "serviceability": "SERVICEABLE",
//        "slaString": "25 mins",
//        "lastMileTravelString": "2.6 km",
//        "iconType": "ICON_TYPE_EMPTY"
//      },
//      "availability": {
//        "nextCloseTime": "2024-05-01 02:59:00",
//        "opened": true
//      },
//      "badges": {
//        "imageBadges": [
//          {
//            "imageId": "Rxawards/_CATEGORY-Pizza.png",
//            "description": "Delivery!"
//          }
//        ]
//      },
//      "isOpen": true,
//      "type": "F",
//      "badgesV2": {
//        "entityBadges": {
//          "imageBased": {
//            "badgeObject": [
//              {
//                "attributes": {
//                  "description": "Delivery!",
//                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                }
//              }
//            ]
//          },
//          "textBased": {
           
//          },
//          "textExtendedBadges": {
           
//          }
//        }
//      },
//      "aggregatedDiscountInfoV3": {
//        "header": "₹150 OFF",
//        "subHeader": "ABOVE ₹299",
//        "discountTag": "FLAT DEAL"
//      },
//      "orderabilityCommunication": {
//        "title": {
         
//        },
//        "subTitle": {
         
//        },
//        "message": {
         
//        },
//        "customIcon": {
         
//        }
//      },
//      "differentiatedUi": {
//        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//        "differentiatedUiMediaDetails": {
//          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//          "lottie": {
           
//          },
//          "video": {
           
//          }
//        }
//      },
//      "reviewsSummary": {
       
//      },
//      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//      "restaurantOfferPresentationInfo": {
       
//      }
//    },
//    "analytics": {
//      "context": "seo-data-79e23441-14a9-4eac-9451-cefb56107305"
//    },
//    "cta": {
//      "link": "https://www.swiggy.com/restaurants/dominos-pizza-rehinus-street-richmond-town-bangalore-23846",
//      "text": "RESTAURANT_MENU",
//      "type": "WEBLINK"
//    },
//    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//  },
//  {
//    "info": {
//      "id": "672074",
//      "name": "Subway",
//      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/e0ab56c3-3d8e-4214-8705-240795d737c0_672074.jpg",
//      "locality": "Ashok Nagar",
//      "areaName": "Sobha Mall",
//      "costForTwo": "₹350 for two",
//      "cuisines": [
//        "Salads",
//        "Snacks",
//        "Desserts",
//        "Beverages"
//      ],
//      "avgRating": 4.2,
//      "parentId": "2",
//      "avgRatingString": "4.2",
//      "totalRatingsString": "500+",
//      "sla": {
//        "deliveryTime": 28,
//        "lastMileTravel": 1.3,
//        "serviceability": "SERVICEABLE",
//        "slaString": "25-30 mins",
//        "lastMileTravelString": "1.3 km",
//        "iconType": "ICON_TYPE_EMPTY"
//      },
//      "availability": {
//        "nextCloseTime": "2024-05-01 03:00:00",
//        "opened": true
//      },
//      "badges": {
       
//      },
//      "isOpen": true,
//      "type": "F",
//      "badgesV2": {
//        "entityBadges": {
//          "imageBased": {
           
//          },
//          "textBased": {
           
//          },
//          "textExtendedBadges": {
           
//          }
//        }
//      },
//      "aggregatedDiscountInfoV3": {
//        "header": "40% OFF",
//        "subHeader": "UPTO ₹80"
//      },
//      "orderabilityCommunication": {
//        "title": {
         
//        },
//        "subTitle": {
         
//        },
//        "message": {
         
//        },
//        "customIcon": {
         
//        }
//      },
//      "differentiatedUi": {
//        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//        "differentiatedUiMediaDetails": {
//          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//          "lottie": {
           
//          },
//          "video": {
           
//          }
//        }
//      },
//      "reviewsSummary": {
       
//      },
//      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//      "restaurantOfferPresentationInfo": {
       
//      }
//    },
//    "analytics": {
//      "context": "seo-data-79e23441-14a9-4eac-9451-cefb56107305"
//    },
//    "cta": {
//      "link": "https://www.swiggy.com/restaurants/subway-ashok-nagar-sobha-mall-bangalore-672074",
//      "text": "RESTAURANT_MENU",
//      "type": "WEBLINK"
//    },
//    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//  },
//  {
//    "info": {
//      "id": "401975",
//      "name": "Chicha's",
//      "cloudinaryImageId": "lgsrrjz4myl2jhjz7fcr",
//      "locality": "Shanti Nagar",
//      "areaName": "AUSTIN TOWN",
//      "costForTwo": "₹250 for two",
//      "cuisines": [
//        "Chinese",
//        "Indian",
//        "Tandoor",
//        "Mughlai",
//        "Fast Food",
//        "Juices"
//      ],
//      "avgRating": 3.6,
//      "parentId": "9792",
//      "avgRatingString": "3.6",
//      "totalRatingsString": "50+",
//      "sla": {
//        "deliveryTime": 32,
//        "lastMileTravel": 2.5,
//        "serviceability": "SERVICEABLE",
//        "slaString": "30-35 mins",
//        "lastMileTravelString": "2.5 km",
//        "iconType": "ICON_TYPE_EMPTY"
//      },
//      "availability": {
//        "nextCloseTime": "2024-05-01 03:00:00",
//        "opened": true
//      },
//      "badges": {
       
//      },
//      "isOpen": true,
//      "aggregatedDiscountInfoV2": {
       
//      },
//      "type": "F",
//      "badgesV2": {
//        "entityBadges": {
//          "imageBased": {
           
//          },
//          "textBased": {
           
//          },
//          "textExtendedBadges": {
           
//          }
//        }
//      },
//      "orderabilityCommunication": {
//        "title": {
         
//        },
//        "subTitle": {
         
//        },
//        "message": {
         
//        },
//        "customIcon": {
         
//        }
//      },
//      "differentiatedUi": {
//        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//        "differentiatedUiMediaDetails": {
//          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//          "lottie": {
           
//          },
//          "video": {
           
//          }
//        }
//      },
//      "reviewsSummary": {
       
//      },
//      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//      "restaurantOfferPresentationInfo": {
       
//      }
//    },
//    "analytics": {
//      "context": "seo-data-79e23441-14a9-4eac-9451-cefb56107305"
//    },
//    "cta": {
//      "link": "https://www.swiggy.com/restaurants/chichas-shanti-nagar-austin-town-bangalore-401975",
//      "text": "RESTAURANT_MENU",
//      "type": "WEBLINK"
//    },
//    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//  },
//  {
//    "info": {
//      "id": "517396",
//      "name": "Jack Kitchen",
//      "cloudinaryImageId": "wjqpny2tery4bwnnipex",
//      "locality": "poojapa layout",
//      "areaName": "Ashok Nagar",
//      "costForTwo": "₹249 for two",
//      "cuisines": [
//        "Chinese",
//        "American",
//        "Snacks",
//        "Juices",
//        "Beverages"
//      ],
//      "parentId": "309091",
//      "avgRatingString": "--",
//      "sla": {
//        "deliveryTime": 35,
//        "serviceability": "SERVICEABLE",
//        "slaString": "30-35 mins",
//        "iconType": "ICON_TYPE_EMPTY"
//      },
//      "availability": {
//        "nextCloseTime": "2024-05-01 03:00:00",
//        "opened": true
//      },
//      "badges": {
       
//      },
//      "isOpen": true,
//      "aggregatedDiscountInfoV2": {
       
//      },
//      "type": "F",
//      "badgesV2": {
//        "entityBadges": {
//          "imageBased": {
           
//          },
//          "textBased": {
           
//          },
//          "textExtendedBadges": {
           
//          }
//        }
//      },
//      "orderabilityCommunication": {
//        "title": {
         
//        },
//        "subTitle": {
         
//        },
//        "message": {
         
//        },
//        "customIcon": {
         
//        }
//      },
//      "differentiatedUi": {
//        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//        "differentiatedUiMediaDetails": {
//          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//          "lottie": {
           
//          },
//          "video": {
           
//          }
//        }
//      },
//      "reviewsSummary": {
       
//      },
//      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//      "restaurantOfferPresentationInfo": {
       
//      }
//    },
//    "analytics": {
//      "context": "seo-data-79e23441-14a9-4eac-9451-cefb56107305"
//    },
//    "cta": {
//      "link": "https://www.swiggy.com/restaurants/jack-kitchen-poojapa-layout-ashok-nagar-bangalore-517396",
//      "text": "RESTAURANT_MENU",
//      "type": "WEBLINK"
//    },
//    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//  },
//  {
//    "info": {
//      "id": "336404",
//      "name": "BIRYANI FLAVOUR HOUSE",
//      "cloudinaryImageId": "lgmgvwb4ym0n20im3cpg",
//      "locality": "2nd Stage",
//      "areaName": "BTM Layout",
//      "costForTwo": "₹200 for two",
//      "cuisines": [
//        "Indian"
//      ],
//      "avgRating": 3.2,
//      "parentId": "46703",
//      "avgRatingString": "3.2",
//      "totalRatingsString": "100+",
//      "sla": {
//        "deliveryTime": 68,
//        "lastMileTravel": 9.9,
//        "serviceability": "SERVICEABLE",
//        "slaString": "65-70 mins",
//        "lastMileTravelString": "9.9 km",
//        "iconType": "ICON_TYPE_EMPTY"
//      },
//      "availability": {
//        "nextCloseTime": "2024-05-07 00:00:00",
//        "opened": true
//      },
//      "badges": {
       
//      },
//      "isOpen": true,
//      "type": "F",
//      "badgesV2": {
//        "entityBadges": {
//          "imageBased": {
           
//          },
//          "textBased": {
           
//          },
//          "textExtendedBadges": {
           
//          }
//        }
//      },
//      "aggregatedDiscountInfoV3": {
//        "header": "40% OFF",
//        "subHeader": "UPTO ₹80"
//      },
//      "orderabilityCommunication": {
//        "title": {
         
//        },
//        "subTitle": {
         
//        },
//        "message": {
         
//        },
//        "customIcon": {
         
//        }
//      },
//      "differentiatedUi": {
//        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//        "differentiatedUiMediaDetails": {
//          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//          "lottie": {
           
//          },
//          "video": {
           
//          }
//        }
//      },
//      "reviewsSummary": {
       
//      },
//      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//      "restaurantOfferPresentationInfo": {
       
//      }
//    },
//    "analytics": {
//      "context": "seo-data-79e23441-14a9-4eac-9451-cefb56107305"
//    },
//    "cta": {
//      "link": "https://www.swiggy.com/restaurants/biryani-flavour-house-2nd-stage-btm-layout-bangalore-336404",
//      "text": "RESTAURANT_MENU",
//      "type": "WEBLINK"
//    },
//    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//  },
//  {
//    "info": {
//      "id": "492797",
//      "name": "Juice World",
//      "cloudinaryImageId": "ygw1khvzf9crje3y736u",
//      "locality": "Lakshmi Road",
//      "areaName": "Shanti Nagar",
//      "costForTwo": "₹200 for two",
//      "cuisines": [
//        "Beverages",
//        "Snacks"
//      ],
//      "parentId": "111971",
//      "avgRatingString": "--",
//      "sla": {
//        "deliveryTime": 33,
//        "lastMileTravel": 2.6,
//        "serviceability": "SERVICEABLE",
//        "slaString": "30-35 mins",
//        "lastMileTravelString": "2.6 km",
//        "iconType": "ICON_TYPE_EMPTY"
//      },
//      "availability": {
//        "nextCloseTime": "2024-05-01 03:30:00",
//        "opened": true
//      },
//      "badges": {
       
//      },
//      "isOpen": true,
//      "aggregatedDiscountInfoV2": {
       
//      },
//      "type": "F",
//      "badgesV2": {
//        "entityBadges": {
//          "imageBased": {
           
//          },
//          "textBased": {
           
//          },
//          "textExtendedBadges": {
           
//          }
//        }
//      },
//      "orderabilityCommunication": {
//        "title": {
         
//        },
//        "subTitle": {
         
//        },
//        "message": {
         
//        },
//        "customIcon": {
         
//        }
//      },
//      "differentiatedUi": {
//        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//        "differentiatedUiMediaDetails": {
//          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//          "lottie": {
           
//          },
//          "video": {
           
//          }
//        }
//      },
//      "reviewsSummary": {
       
//      },
//      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//      "restaurantOfferPresentationInfo": {
       
//      }
//    },
//    "analytics": {
//      "context": "seo-data-79e23441-14a9-4eac-9451-cefb56107305"
//    },
//    "cta": {
//      "link": "https://www.swiggy.com/restaurants/juice-world-lakshmi-road-shanti-nagar-bangalore-492797",
//      "text": "RESTAURANT_MENU",
//      "type": "WEBLINK"
//    },
//    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//  },
//  {
//    "info": {
//      "id": "10583",
//      "name": "Pizza Hut",
//      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//      "locality": "Frazer Town",
//      "areaName": "Frazer Town",
//      "costForTwo": "₹350 for two",
//      "cuisines": [
//        "Pizzas"
//      ],
//      "avgRating": 4,
//      "parentId": "721",
//      "avgRatingString": "4.0",
//      "totalRatingsString": "10K+",
//      "sla": {
//        "deliveryTime": 36,
//        "lastMileTravel": 4.6,
//        "serviceability": "SERVICEABLE_WITH_BANNER",
//        "slaString": "35-40 mins",
//        "lastMileTravelString": "4.6 km",
//        "iconType": "ICON_TYPE_EMPTY"
//      },
//      "availability": {
//        "nextOpenTimeMessage": "Currently not taking orders for this location",
//        "nextCloseTime": "2024-05-01 03:00:00",
//        "opened": true
//      },
//      "badges": {
       
//      },
//      "isOpen": true,
//      "aggregatedDiscountInfoV2": {
       
//      },
//      "type": "F",
//      "badgesV2": {
//        "entityBadges": {
//          "imageBased": {
           
//          },
//          "textBased": {
           
//          },
//          "textExtendedBadges": {
           
//          }
//        }
//      },
//      "orderabilityCommunication": {
//        "title": {
         
//        },
//        "subTitle": {
         
//        },
//        "message": {
         
//        },
//        "customIcon": {
         
//        }
//      },
//      "differentiatedUi": {
//        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//        "differentiatedUiMediaDetails": {
//          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//          "lottie": {
           
//          },
//          "video": {
           
//          }
//        }
//      },
//      "reviewsSummary": {
       
//      },
//      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//      "restaurantOfferPresentationInfo": {
       
//      }
//    },
//    "analytics": {
//      "context": "seo-data-79e23441-14a9-4eac-9451-cefb56107305"
//    },
//    "cta": {
//      "link": "https://www.swiggy.com/restaurants/pizza-hut-frazer-town-bangalore-10583",
//      "text": "RESTAURANT_MENU",
//      "type": "WEBLINK"
//    },
//    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//  },
//  {
//    "info": {
//      "id": "121603",
//      "name": "Kannur Food Point",
//      "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
//      "locality": "BTM Layout",
//      "areaName": "BTM",
//      "costForTwo": "₹300 for two",
//      "cuisines": [
//        "Kerala",
//        "Chinese"
//      ],
//      "avgRating": 4.1,
//      "parentId": "20974",
//      "avgRatingString": "4.1",
//      "totalRatingsString": "10K+",
//      "sla": {
//        "deliveryTime": 33,
//        "lastMileTravel": 6.5,
//        "serviceability": "SERVICEABLE_WITH_BANNER",
//        "slaString": "30-35 mins",
//        "lastMileTravelString": "6.5 km",
//        "iconType": "ICON_TYPE_EMPTY"
//      },
//      "availability": {
//        "nextOpenTimeMessage": "Currently not taking orders for this location",
//        "nextCloseTime": "2024-05-01 02:30:00",
//        "opened": true
//      },
//      "badges": {
       
//      },
//      "isOpen": true,
//      "aggregatedDiscountInfoV2": {
       
//      },
//      "type": "F",
//      "badgesV2": {
//        "entityBadges": {
//          "imageBased": {
           
//          },
//          "textBased": {
           
//          },
//          "textExtendedBadges": {
           
//          }
//        }
//      },
//      "orderabilityCommunication": {
//        "title": {
         
//        },
//        "subTitle": {
         
//        },
//        "message": {
         
//        },
//        "customIcon": {
         
//        }
//      },
//      "differentiatedUi": {
//        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//        "differentiatedUiMediaDetails": {
//          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//          "lottie": {
           
//          },
//          "video": {
           
//          }
//        }
//      },
//      "reviewsSummary": {
       
//      },
//      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//      "restaurantOfferPresentationInfo": {
       
//      }
//    },
//    "analytics": {
//      "context": "seo-data-79e23441-14a9-4eac-9451-cefb56107305"
//    },
//    "cta": {
//      "link": "https://www.swiggy.com/restaurants/kannur-food-point-layout-btm-bangalore-121603",
//      "text": "RESTAURANT_MENU",
//      "type": "WEBLINK"
//    },
//    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//  },
//  {
//    "info": {
//      "id": "415042",
//      "name": "Royal Biryani Kitchen",
//      "cloudinaryImageId": "rze3ha5v1jced9951x0b",
//      "locality": "1st  Stage",
//      "areaName": "BTM Layout",
//      "costForTwo": "₹250 for two",
//      "cuisines": [
//        "Biryani",
//        "Chinese",
//        "Tandoor",
//        "Snacks",
//        "Mughlai"
//      ],
//      "avgRating": 3.4,
//      "parentId": "171864",
//      "avgRatingString": "3.4",
//      "totalRatingsString": "1K+",
//      "sla": {
//        "deliveryTime": 36,
//        "lastMileTravel": 7.5,
//        "serviceability": "SERVICEABLE_WITH_BANNER",
//        "slaString": "35-40 mins",
//        "lastMileTravelString": "7.5 km",
//        "iconType": "ICON_TYPE_EMPTY"
//      },
//      "availability": {
//        "nextOpenTimeMessage": "Currently not taking orders for this location",
//        "nextCloseTime": "2024-05-01 23:59:00",
//        "opened": true
//      },
//      "badges": {
       
//      },
//      "isOpen": true,
//      "type": "F",
//      "badgesV2": {
//        "entityBadges": {
//          "imageBased": {
           
//          },
//          "textBased": {
           
//          },
//          "textExtendedBadges": {
           
//          }
//        }
//      },
//      "aggregatedDiscountInfoV3": {
//        "header": "₹125 OFF",
//        "subHeader": "ABOVE ₹349",
//        "discountTag": "FLAT DEAL"
//      },
//      "orderabilityCommunication": {
//        "title": {
         
//        },
//        "subTitle": {
         
//        },
//        "message": {
         
//        },
//        "customIcon": {
         
//        }
//      },
//      "differentiatedUi": {
//        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//        "differentiatedUiMediaDetails": {
//          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//          "lottie": {
           
//          },
//          "video": {
           
//          }
//        }
//      },
//      "reviewsSummary": {
       
//      },
//      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//      "restaurantOfferPresentationInfo": {
       
//      }
//    },
//    "analytics": {
//      "context": "seo-data-79e23441-14a9-4eac-9451-cefb56107305"
//    },
//    "cta": {
//      "link": "https://www.swiggy.com/restaurants/royal-biryani-kitchen-1st-stage-btm-layout-bangalore-415042",
//      "text": "RESTAURANT_MENU",
//      "type": "WEBLINK"
//    },
//    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//  }
// ]
 




const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

