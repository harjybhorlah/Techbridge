const Nicole = [{
    image: 'products/product-1.jpg',
    name: 'Starlink Actuated Standard Router Kit....',
    prices:'590,000',
    discount:'990,000',
    disFigure: '-40%',
    time: '1day - 4hrs 58mins 36secs',
    sold: 71

},{
    image: 'products/product 2.jpg',
    name: 'Nivea Deep Soccermania Bundle  400ml Lotion, 5...',
    prices:'9,130',
    discount:'11,400',
    disFigure: '-20%',
    time: '9days - 15hrs 54mins 17secs',
    sold: 52   
},{
    image: 'products/product-3.jpg',
    name: 'Nivea Deep Antiperspirant Roll-on For Men - 72h...',
    prices:'2,880',
    discount:'3,600',
    disFigure: '-20%',
    time: '9days - 15hrs 54mins 17secs',
    sold: 51   
},{
    image: 'products/product-4.jpg',
    name: 'Nivea Men Deep Impact Body Location - 400ml',
    prices:'3,655',
    discount:'4,300',
    disFigure: '-15%',
    time: '9days - 14hrs 21mins 23secs',
    sold: 51 
},{
    image: 'products/product-5.jpg',
    name: 'Nivea Mens Deep impact Body Lotion 400ml - P..',
    prices:'6,880',
    discount:'8,600',
    disFigure: '-20%',
    time: '9days - 14hrs 20mins 23secs',
    sold: 62
},{
  image: 'products/product-6.jpg',
    name: 'Nivea Deep Shower Gel For Men - 500ml',
    prices:'4,775',
    discount:'5,300',
    disFigure: '-10%',
    time: '9days - 12hrs 15mins 9secs',
    sold: 79  
},{
    image: 'products/product-7.jpg',
    name: 'Realme C61 6.74" 8gb Ram 256gb Rom Android 13...',
    prices:'174,000',
    discount:'195,000',
    disFigure: '-11%',
    time: '1day - 7hrs 5mins 50secs',
    sold: 29
},{
    image: 'products/product-8.jpg',
    name: 'Note 50 6.74" Dual Sim 3gb Ram 64gb Rom 4g Sky...',
    prices:'109,000',
    discount:'122,900',
    disFigure: '-11%',
    time: '1days - 7hrs 50mins 50secs',
    sold: 13
},{
    image: 'products/product-9.jpg',
    name: 'Oppo A3x - 128GB -4GB - Blue - Cph2641',
    prices:'195,000',
    discount:'225,600',
    disFigure: '-20%',
    time: ' 1day - 4hrs 2mins 50secs',
    sold: 12
},{
    image: 'products/product-10.jpg',
    name: 'iTEC Microwave Oven (ZNX-ITEM-001155)',
    prices:'71,200',
    discount:'81,600',
    disFigure: '13%',
    time: '1day - 10hrs 50secs',
    sold: 54
}];

let productHtml = '';
Nicole.forEach((Nicole /*My daughter's name*/) => {
    productHtml = productHtml+=  `
        <div class="items">
                <div class="product">
                    <img src="${Nicole.image}" alt="">
                </div>
                <div class="productdescription">
                    <p>${Nicole.name} </p>
                </div>
                <div class="prices">
                    <p>
                        ₦${Nicole.prices}
                    </p>
                    <span class="discountprice">
                        ₦${Nicole.discount}
                    </span>
                    <span class="figure">
                        ${Nicole.disFigure}
                    </span>



                </div>
                <div class="time">
                    <p>
                        <i class="fa-regular fa-clock"></i> ${Nicole.time}
                    </p>
                </div>
                <div class="sold">
                    <p>
                        Sold: ${Nicole.sold}%
                    </p>

                    <div class="progress-container">
                        <div class="progress-bar" style="width:${Nicole.sold}%"></div>
                      </div>
                </div>

                <div class="addcart">
                    <p>
                        Add to Cart
                    </p>
                </div>
            </div>
    `;
});

console.log(productHtml);


document.querySelector('.jsContainer').innerHTML= productHtml;

 