import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="title" key="h1">
    Food Villa
  </h1>
);

const restrauntList = [
  {
    type: "restaurant",
    info: {
      resId: 19608339,
      name: "Monginis",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/19068604/4de4976b95304b9835eb76258a683e77_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/19068604/4de4976b95304b9835eb76258a683e77_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "4,599",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "4,599",
            reviewTextSmall: "4,599 Reviews",
            subtext: "4,599 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Hindmotor, Kolkata",
        address:
          "77, GR, 1, Eliza XI, BBD Road, Bhadrakali, Hindmotor, Hooghly, Hindmotor, Kolkata",
        localityUrl: "kolkata/hindmotor-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kolkata/monginis-hindmotor/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/monginis-hindmotor/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19608339%3Futm_campaign%3D92fc54e22fb0dc998cdc7919720f5e25%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a4e9908b-8f8a-485e-bb83-4ac70809e839","location_type":"delivery_cell","location_id":"4177260875058511872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19608339","element_type":"listing","rank":1}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        },
        text: "2000+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18961993,
      name: "KFC",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/20287/70372b1137630455e2dbf24bb142c14b_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/20287/70372b1137630455e2dbf24bb142c14b_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "14K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "423",
            reviewTextSmall: "423 Reviews",
            subtext: "423 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "13.6K",
            reviewTextSmall: "13.6K Reviews",
            subtext: "13.6K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Uttarpara, Kolkata",
        address:
          "22 & 22 B, Ground Floor, Bhadrakali, Grand Trunk Road, Uttarpara, Kolkata",
        localityUrl: "kolkata/uttarpara-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "30 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kolkata/kfc-uttarpara/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/kfc-uttarpara/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18961993%3Futm_campaign%3D92fc54e22fb0dc998cdc7919720f5e25%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a4e9908b-8f8a-485e-bb83-4ac70809e839","location_type":"delivery_cell","location_id":"4177260875058511872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18961993","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        },
        text: "3975+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18929239,
      name: "Pizza Hut",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/20407/c8e3d85b773066868ec333d6f17782cb_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/20407/c8e3d85b773066868ec333d6f17782cb_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "13.8K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "260",
            reviewTextSmall: "260 Reviews",
            subtext: "260 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "13.6K",
            reviewTextSmall: "13.6K Reviews",
            subtext: "13.6K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹950 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Uttarpara, Kolkata",
        address:
          "20 & 22B, Unimark Riviera, Bhadrakali, Near GT Road Uttarpara, Uttarpara, Kolkata",
        localityUrl: "kolkata/uttarpara-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "35 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kolkata/pizza-hut-uttarpara/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/pizza-hut-uttarpara/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18929239%3Futm_campaign%3D92fc54e22fb0dc998cdc7919720f5e25%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a4e9908b-8f8a-485e-bb83-4ac70809e839","location_type":"delivery_cell","location_id":"4177260875058511872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18929239","element_type":"listing","rank":3}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        },
        text: "3525+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19879359,
      name: "Kwality Wall’s Frozen Dessert and Ice Cream Shop",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/19389263/75fb72db1f40ce9c2d894f0c431c1ea9_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/19389263/75fb72db1f40ce9c2d894f0c431c1ea9_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.6",
        rating_text: "4.6",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "2,316",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.6",
            reviewCount: "2,316",
            reviewTextSmall: "2,316 Reviews",
            subtext: "2,316 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.6",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹200 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Konnagar, Kolkata",
        address: "68/20/A, Arabinda Road, Konnagar, Kolkata",
        localityUrl: "kolkata/konnagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/ice-cream/",
          name: "Ice Cream",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "17 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/kolkata/kwality-walls-frozen-dessert-and-ice-cream-shop-konnagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/kolkata/kwality-walls-frozen-dessert-and-ice-cream-shop-konnagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19879359%3Futm_campaign%3D92fc54e22fb0dc998cdc7919720f5e25%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a4e9908b-8f8a-485e-bb83-4ac70809e839","location_type":"delivery_cell","location_id":"4177260875058511872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19879359","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        },
        text: "675+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18878720,
      name: "Haldiram's Prabhuji",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/22165/150c263f0ee665a268ff215d85082e19_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/22165/150c263f0ee665a268ff215d85082e19_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "3,146",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "57",
            reviewTextSmall: "57 Reviews",
            subtext: "57 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "3,089",
            reviewTextSmall: "3,089 Reviews",
            subtext: "3,089 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Hindmotor, Kolkata",
        address: "18/1, Janata Sarani, Ward 4, Hindmotor, Kolkata",
        localityUrl: "kolkata/hindmotor-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/mishti/",
          name: "Mishti",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "36 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kolkata/haldirams-prabhuji-hindmotor/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/haldirams-prabhuji-hindmotor/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18878720%3Futm_campaign%3D92fc54e22fb0dc998cdc7919720f5e25%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a4e9908b-8f8a-485e-bb83-4ac70809e839","location_type":"delivery_cell","location_id":"4177260875058511872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18878720","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        },
        text: "725+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19256750,
      name: "Behrouz Biryani",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/19090652/7d1d6155fa28b3864c1f71342eea8b1c_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/19090652/7d1d6155fa28b3864c1f71342eea8b1c_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "4,780",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "4,780",
            reviewTextSmall: "4,780 Reviews",
            subtext: "4,780 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹750 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Salkia, Howrah",
        address: "61 A, Sri Aurobindo Road, Golabari, Salkia, Howrah",
        localityUrl: "kolkata/salkia-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/hyderabadi/",
          name: "Hyderabadi",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTU3XCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/lucknowi/",
          name: "Lucknowi",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "60 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kolkata/behrouz-biryani-salkia-howrah/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/behrouz-biryani-salkia-howrah/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19256750%3Futm_campaign%3D92fc54e22fb0dc998cdc7919720f5e25%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "10.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a4e9908b-8f8a-485e-bb83-4ac70809e839","location_type":"delivery_cell","location_id":"4177260875058511872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19256750","element_type":"listing","rank":6}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        },
        text: "1825+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18805968,
      name: "New Arsalan Biryani",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/18805968/f1521767745233b5fcfcf28c9bd475cf_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/18805968/f1521767745233b5fcfcf28c9bd475cf_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "9,893",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "9,893",
            reviewTextSmall: "9,893 Reviews",
            subtext: "9,893 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹150 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Rishra, Kolkata",
        address:
          "7/2, K.C Sen Road, Near Rishra Medical Service, Rishra, Kolkata",
        localityUrl: "kolkata/rishra-restaurants",
      },
      timing: {
        text: "Opens in 6 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/biryani/",
          name: "Biryani",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "33 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kolkata/new-arsalan-biryani-rishra/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/new-arsalan-biryani-rishra/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18805968%3Futm_campaign%3D92fc54e22fb0dc998cdc7919720f5e25%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a4e9908b-8f8a-485e-bb83-4ac70809e839","location_type":"delivery_cell","location_id":"4177260875058511872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18805968","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        },
        text: "1600+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19793756,
      name: "Mama Mia!",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/20951/5600d2a50fc59c17794efe7e04c4e110_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/20951/5600d2a50fc59c17794efe7e04c4e110_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,606",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "1,606",
            reviewTextSmall: "1,606 Reviews",
            subtext: "1,606 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Uttarpara, Kolkata",
        address:
          "53, New G T Road, Uttarpara College More, Uttarpara Kotrung, Hooghly, Ward 17, Uttarpara, Kolkata",
        localityUrl: "kolkata/uttarpara-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/ice-cream/",
          name: "Ice Cream",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "35 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kolkata/mama-mia-uttarpara/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/mama-mia-uttarpara/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19793756%3Futm_campaign%3D92fc54e22fb0dc998cdc7919720f5e25%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "4.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a4e9908b-8f8a-485e-bb83-4ac70809e839","location_type":"delivery_cell","location_id":"4177260875058511872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19793756","element_type":"listing","rank":8}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "Pro extra 15% OFF",
        color: {
          tint: "600",
          type: "pink",
        },
      },
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        },
        text: "925+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20245746,
      name: "NIC Ice Creams",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/19319293/e0c279cdf70ec6d36e6239cc807b4d1a_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/19319293/e0c279cdf70ec6d36e6239cc807b4d1a_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.5",
        rating_text: "4.5",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "1,109",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.5",
            reviewCount: "1,109",
            reviewTextSmall: "1,109 Reviews",
            subtext: "1,109 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹200 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Serampore, Kolkata",
        address:
          "Shop 42, Ground Floor, New Gate Street, Rishi Bankim Sarani, Serampore, Kolkata",
        localityUrl: "kolkata/serampore-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/ice-cream/",
          name: "Ice Cream",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "37 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kolkata/nic-ice-creams-serampore/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/nic-ice-creams-serampore/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20245746%3Futm_campaign%3D92fc54e22fb0dc998cdc7919720f5e25%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "5.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a4e9908b-8f8a-485e-bb83-4ac70809e839","location_type":"delivery_cell","location_id":"4177260875058511872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20245746","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "40% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        },
        text: "975+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20000640,
      name: "Kreamz",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/19909594/3e49846e6e863f964f2804bfe14be9e2_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/19909594/3e49846e6e863f964f2804bfe14be9e2_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,006",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "1,006",
            reviewTextSmall: "1,006 Reviews",
            subtext: "1,006 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Konnagar, Kolkata",
        address: "142/13, Ward 11, Indira Gandhi Road, Konnagar, Kolkata",
        localityUrl: "kolkata/konnagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kolkata/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "14 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kolkata/kreamz-konnagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/kreamz-konnagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20000640%3Futm_campaign%3D92fc54e22fb0dc998cdc7919720f5e25%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "550 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a4e9908b-8f8a-485e-bb83-4ac70809e839","location_type":"delivery_cell","location_id":"4177260875058511872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20000640","element_type":"listing","rank":10}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        },
        text: "250+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20530075,
      name: "Baskin Robbins",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/20530075/a2157e6236990bcb15521819664f13b8_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/20530075/a2157e6236990bcb15521819664f13b8_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "8",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.6",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "0 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "8",
            reviewTextSmall: "8 Reviews",
            subtext: "8 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Serampore, Kolkata",
        address: "61, Kalitala, Serampore, Kolkata",
        localityUrl: "kolkata/serampore-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/ice-cream/",
          name: "Ice Cream",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kolkata/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "37 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kolkata/baskin-robbins-serampore/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/baskin-robbins-serampore/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20530075%3Futm_campaign%3D92fc54e22fb0dc998cdc7919720f5e25%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "5.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a4e9908b-8f8a-485e-bb83-4ac70809e839","location_type":"delivery_cell","location_id":"4177260875058511872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20530075","element_type":"listing","rank":11}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        },
        text: "75+ orders placed from here recently",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19314138,
      name: "The Rasoi Meals",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/19314138/22ca08f6e26195ececb68d6fdaddc3d7_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/19314138/22ca08f6e26195ececb68d6fdaddc3d7_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,777",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "29",
            reviewTextSmall: "29 Reviews",
            subtext: "29 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "2,748",
            reviewTextSmall: "2,748 Reviews",
            subtext: "2,748 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Serampore, Kolkata",
        address: "526, GT Road, Mahamaya Apartment, Serampore, Kolkata",
        localityUrl: "kolkata/serampore-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTBcIl19Il0%3D",
          url: "https://www.zomato.com/kolkata/restaurants/bengali/",
          name: "Bengali",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "48 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kolkata/the-rasoi-meals-serampore/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kolkata/the-rasoi-meals-serampore/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19314138%3Futm_campaign%3D92fc54e22fb0dc998cdc7919720f5e25%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "4.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a4e9908b-8f8a-485e-bb83-4ac70809e839","location_type":"delivery_cell","location_id":"4177260875058511872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19314138","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
        },
        text: "1550+ orders placed from here recently",
      },
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
];

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  return (
    <div className="card">
      <img alt="Cuisine Logo" src={props.info.image.url} />
      <h2>{props.info.name}</h2>
      <h3>{props.info.cuisine[0].name}</h3>
      <h4>{props.info.rating.rating_text}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="resturant-list">
      {restrauntList.map((resturant) => {
        return <ResturantCard {...resturant} key={resturant.info.resId} />;
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h4>Copywright code2elevate</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
