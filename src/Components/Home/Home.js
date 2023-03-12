import React from "react";
import "./Home.css";
import Product from "../Products/Product";
import Banner from "./Banner";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <Banner />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="CRE-8 Fitness | Push-Up Board | Work at Home Ab Workouts Equipment with Resistance"
            price={35.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61EY2orqjeL._AC_UL320_.jpg"
          />
          <Product
            id="23445930"
            title="Cubii Under Desk Elliptical Bundle, JR1 and Non-Slip Mat, Bike Pedal Exerciser with LCD Fitness Tracker"
            price={310.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61m0CVA1LQL._AC_UL320_.jpg"
          />
          <Product
            id="3254354345"
            title="Bowflex SelectTech 552 Adjustable Dumbbells"
            price={65.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71+pOdQ7iKL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3903851"
            title="SanDisk 128GB Ultra microSDXC UHS-I Memory Card with Adapter - 120MB/s"
            price={61.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61jhzv9AQRL._AC_UL320_.jpg"
          />
          <Product
            id="33445932"
            title="Original HP 67XL Black High-yield Ink Cartridge | Works with HP DeskJet 1255, 2700, 4100 Series "
            price={469.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL320_.jpg"
          />
          <Product
            id="3254354343"
            title="HP OfficeJet Pro 8025e Wireless Color All-in-One Printer with bonus 6 free months Instant Ink with HP+ (1K7K3A)"
            price={200.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/617l6tiEeDL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
