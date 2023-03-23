/*======================JQuery======================*/
$(function () {

  const body = $('body'),
        overlay = $('.overlay');

  const counterBtnMinus = $('.counter__btn--minus'),
        counterBtnPlus = $('.counter__btn--plus');

  const catalogBtn = $('.catalog__btn'),
        catalogBtnSide = $('.catalog__btn--side'),
        catalogList = $('.catalog__list'),
        catalogItem = $('.catalog__item'),
        catalogLinks = $('.catalog__link');

  const basketBtn = $('.basket-btn'),
        basket = $('.basket'),
        basketCloseBtn = $('.basket__close-btn');

  const headerBurger = $('.header__burger'),
        sideMenu = $('.side-menu'),
        sideMenuCloseBtn = $('.side-menu__close-btn');

  const searchBtn = $('.search-btn'),
        headerForm = $('.header__form');        

  const filterBtn = $('.filter-btn'),
        catalogFiltersSide = $('.catalog__filters'),
        catalogCloseBtn = $('.catalog__filter-close');

  const contentFilterBtn = $('.content-filter__btn'),
        contentFilterBtnFilters = $('.content-filter__btn--filters'),
        contentFilterBtnGrid = $('.content-filter__btn--grid'),
        contentFilterBtnList = $('.content-filter__btn--list'),
        catalogProdListList = $('.catalog__prod-list--list'),
        catalogProdListGrid = $('.catalog__prod-list--grid');

  const productCloseBtn = $('.product__close-btn'),
        productImagesLink = $('.product__image'),
        productPopup = $('.product__popup'),
        productBtn = $('.product__btn'),
        productBtnDesc = $('.product__btn--desc'),
        productBtnChar = $('.product__btn--char'),
        productBtnReviews = $('.product__btn--reviews'),
        productDesc = $('.product__desc'),
        productChar = $('.product__char'),
        productReviews = $('.product__reviews');

  const heroInner = $('.hero__inner'),
        brandsList = $('.brands__list'),
        productImages = $('.product__images'),
        productImagesBig = $('.product__images--big'),
        interestingInner = $('.interesting__inner');

  const catalogFilterPrice = $('.catalog-filter__price');

  const ratingStar = $('.rating__star'),
        productRating = $('.product__rating'),
        userRating = $('.user__rating');

  /*OVERLAY*/

  overlay.on('click',function () {
		overlay.hide();
    catalogList.removeClass('catalog__list--active');
    catalogFiltersSide.removeClass('catalog__filters--active');
    catalogBtn.removeClass('catalog__btn--active');
    catalogCloseBtn.removeClass('close-btn');
    basket.removeClass('basket--active');
    sideMenu.removeClass('side-menu--active');
    body.removeClass('body--fixed');
	});

  /*COUNTER*/

  counterBtnMinus.on('click', function (e) {
    e.preventDefault();
    let $this = $(this);
    let $input = $this.closest('div').find('input');
    let value = parseInt($input.val());

    if (value > 1) {
      value--;
    }

    $input.val(value);
  });

  counterBtnPlus.on('click', function (e) {
    e.preventDefault();
    let $this = $(this);
    let $input = $this.closest('div').find('input');
    let value = parseInt($input.val());
    // let total = $('.product-card__sum').html();

    if (value <= 98) {
      value++;
    }

    $input.val(value);
  });

  /*CATALOG*/

  catalogBtn.on('click', function () {
    catalogBtn.toggleClass('catalog__btn--active');
    catalogList.toggleClass('catalog__list--active');
    body.toggleClass('body--fixed');
    overlay.show();
  });

  catalogBtnSide.on('click', function () {
    catalogBtn.toggleClass('catalog__btn--active');
    catalogList.removeClass('catalog__list--active');
    catalogList.toggleClass('catalog__list--active-side');
    body.toggleClass('body--fixed');
    overlay.show();
  });

  catalogLinks.on('click', function (e) {
    e.preventDefault();
    catalogLinks.removeClass('catalog__link--active');
    $(this).addClass('catalog__link--active');
  });

  /*$(".catalog__link").on("click", function () {

    $('.catalog__link').removeClass('catalog__link--active');
    $('.catalog__item').removeClass('catalog__item--active');

    $(this).parent().find('.catalog__link').toggleClass('catalog__link--active');
    $(this).parent('.catalog__item').toggleClass('catalog__item--active');

  });*/

  /*BASKET*/

  basketBtn.on('click', function () {
    basket.addClass('basket--active');
    body.toggleClass('body--fixed');
    overlay.show();
  });

  basketCloseBtn.on('click', function () {
    basket.removeClass('basket--active');
    body.toggleClass('body--fixed');
    overlay.hide();
  });

  /*SIDE-MENU*/

  headerBurger.on('click', function () {
    sideMenu.addClass('side-menu--active');
    body.toggleClass('body--fixed');
    overlay.show();
  });

  sideMenuCloseBtn.on('click', function () {
    sideMenu.removeClass('side-menu--active');
    body.toggleClass('body--fixed');
    overlay.hide();
  });

  // /*SEARCH*/

  searchBtn.on('click', function () {
    headerForm.toggleClass('header__form--active');
  });

  /*CATALOG-FILTERS*/

  filterBtn.on("click", function () {
    $(this).parent().find('.catalog-filter__form').toggleClass('catalog-filter__form--active');
    $(this).parent().find('.catalog-filter__list').toggleClass('catalog-filter__list--active');
  });

  /*CATALOG-FILTERS--SIDE*/

  contentFilterBtnFilters.on("click", function () {
    catalogFiltersSide.toggleClass('catalog__filters--active');
    catalogCloseBtn.addClass('close-btn');
    body.toggleClass('body--fixed');
    overlay.show();
  });

  catalogCloseBtn.on("click", function () {
    catalogFiltersSide.removeClass('catalog__filters--active');
    catalogCloseBtn.removeClass('close-btn');
    body.toggleClass('body--fixed');
    overlay.hide();
  });

  /*CONTENT-FILTER-BTNS*/

  contentFilterBtnGrid.on("click", function () {
    contentFilterBtnGrid.addClass('content-filter__btn--active');
    contentFilterBtnList.removeClass('content-filter__btn--active');
    catalogProdListList.removeClass('catalog__prod-list--active');
    catalogProdListGrid.addClass('catalog__prod-list--active');
  });

  contentFilterBtnList.on("click", function () {
    contentFilterBtnList.addClass('content-filter__btn--active');
    contentFilterBtnGrid.removeClass('content-filter__btn--active');
    catalogProdListGrid.removeClass('catalog__prod-list--active');
    catalogProdListList.addClass('catalog__prod-list--active');
  });

  /*PRODUCT-POPUP*/

  productImagesLink.on("click", function () {
    productPopup.addClass('product__popup--active');
    productImages.addClass('product__images--popup');
  })

  productCloseBtn.on("click", function () {
    productPopup.removeClass('product__popup--active');
    productImages.removeClass('product__images--popup');
  })

  /*PRODUCT-BTNS*/

  productBtn.on("click", function () {
    productBtn.removeClass('product__btn--active');
    $(this).parent().find('.product__btn').toggleClass('product__btn--active');

    productDesc.removeClass('product__desc--active');
    productChar.removeClass('product__char--active');
    productReviews.removeClass('product__reviews--active');
  });

  productBtnDesc.on("click", function () {
    productDesc.addClass('product__desc--active');
  });

  productBtnChar.on("click", function () {
    productChar.addClass('product__char--active');
  });

  productBtnReviews.on("click", function () {
    productReviews.addClass('product__reviews--active');
  });

  /*HERO-INNER*/

  heroInner.slick({
    prevArrow: '<button class="hero__inner-slick-prev" type="button"><svg class="slick-prev-img" width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.91484 18.9533 0.392073C18.4278 -0.130694 17.5756 -0.130694 17.0502 0.392073L1.03688 14.9851C0.756806 15.2637 0.636731 15.6332 0.655437 15.9986C0.638023 16.3654 0.758059 16.7348 1.03821 17.0149Z" fill="#505050" /></svg></button>',
    nextArrow: '<button class="hero__inner-slick-next" type="button"><svg class="slick-next-img" width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050" /></svg></button>',
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false
        }
      }
    ]
  });

  /*BRANDS-LIST*/

  brandsList.slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  })

  /*PRODUCT-IMAGES*/

  productImages.slick({
    prevArrow: '<button class="product__images-slick-prev" type="button"><svg class="slick-prev-img" width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.91484 18.9533 0.392073C18.4278 -0.130694 17.5756 -0.130694 17.0502 0.392073L1.03688 14.9851C0.756806 15.2637 0.636731 15.6332 0.655437 15.9986C0.638023 16.3654 0.758059 16.7348 1.03821 17.0149Z" fill="#505050" /></svg></button>',
    nextArrow: '<button class="product__images-slick-next" type="button"><svg class="slick-next-img" width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050" /></svg></button>',
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  })

  /*INTERESTING-INNER*/

  interestingInner.slick({
    prevArrow: '<button class="interesting__inner-slick-prev" type="button"><svg class="slick-prev-img" width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.91484 18.9533 0.392073C18.4278 -0.130694 17.5756 -0.130694 17.0502 0.392073L1.03688 14.9851C0.756806 15.2637 0.636731 15.6332 0.655437 15.9986C0.638023 16.3654 0.758059 16.7348 1.03821 17.0149Z" fill="#505050" /></svg></button>',
    nextArrow: '<button class="interesting__inner-slick-next" type="button"><svg class="slick-next-img" width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050" /></svg></button>',
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  })

  /*CATALOG-FILTER-PRICE*/

  catalogFilterPrice.ionRangeSlider({
    type: "double",
    postfix: "₽",
    onStart: function (data) {
      $('.catalog-filter__from').text(data.from);
      $('.catalog-filter__to').text(data.to);
    },
    onChange: function (data) {
      $('.catalog-filter__from').text(data.from);
      $('.catalog-filter__to').text(data.to);
    }
  });

  /*CONTENT-FILTER-SORT*/

  $('.content-filter__sort').styler();

  /*RATING-STAR*/

  ratingStar.rateYo({
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#FFB800",
    numStars: 1
  });

  /*PRODUCT-RATING*/

  productRating.rateYo({
    rating: 4,
    starWidth: "16px",
    normalFill: "#C1C1C14D",
    ratedFill: "#FFB800",
    spacing: "6px",
    numStars: 5
  });

  /*USER-RATING*/

  userRating.rateYo({
    rating: 4,
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#FFB800",
    spacing: "6px",
    numStars: 5
  });

  /*PRODUCT-IMAGES-FANCYBOX*/

  // productImages.fancybox({
  //   'hideOnContentClick': true
  // });

  /*MIXERS-CONFIG*/

  var config = {
    controls: {
      scope: 'local'
    }
  };

  /*BEST-PRODUCTS-MIXER*/

  let mixer = mixitup('.best-products', config);

  /*DISCOUNTS-MIXER*/

  let mixer2 = mixitup('.discounts', config);

})

/*======================JS======================*/
/*=================some solutions===========================*/

// const body = document.querySelector('body'),
//       overlay = document.querySelector('.overlay');

// const catalogBtn = document.querySelector('.catalog__btn'),
//       catalogList = document.querySelector('.catalog__list'),
//       catalogLinks = document.querySelectorAll('.catalog__link');

// const catalogBtnSide = document.querySelector('.catalog__btn--side'),
//       catalogListSide = document.querySelector('.catalog__list--side');
      
// const basket = document.querySelector('.basket'),
//       basketBtn = document.querySelector('.basket-btn'),
//       basketCloseBtn = document.querySelector('.basket__close-btn');

// const headerBurger = document.querySelector('.header__burger'),
//       sideMenu = document.querySelector('.side-menu'),
//       sideMenuCloseBtn = document.querySelector('.side-menu__close-btn');

// const searchBtn = document.querySelector('.search-btn'),
//       headerForm = document.querySelector('.header__form');

// const counterBtnIcon = document.querySelectorAll('.counter__btn-icon');

// /*OVERLAY*/      
      
// function overlayShow() {
//   overlay.style.display = "block";
// } 

// function overlayHide() {
//   overlay.style.display = "none";
// }

// overlay.addEventListener('click', function () {   
//   body.classList.remove('body--fixed');
//   catalogBtn.classList.remove('catalog__btn--active');
//   catalogList.classList.remove('catalog__list--active');
//   basket.classList.remove('basket--active');
//   sideMenu.classList.remove('side-menu--active');
//   catalogBtnSide.classList.remove('catalog__btn--active');
//   catalogListSide.classList.remove('catalog__list--active');
//   overlayHide();
// });

// /*CATALOG*/

// catalogBtn.addEventListener('click', function () {
//   catalogBtn.classList.toggle('catalog__btn--active');
//   catalogList.classList.toggle('catalog__list--active');
//   body.classList.toggle('body--fixed');
//   overlayShow();
// });

// catalogList.addEventListener('click', function (event) {

//   let current = document.getElementsByClassName('catalog__link--active');

//   if (current.length > 0) {
//     for (const catalogLink of catalogLinks) {
//       catalogLink.classList.remove('catalog__link--active');
//     }
//   }

//   if (event.target.closest('.catalog__link')) {
//     event.target.classList.toggle('catalog__link--active');
//   }

// });

// /*BASKET*/

// basketBtn.addEventListener('click', function () {
//   basket.classList.add('basket--active');
//   body.classList.toggle('body--fixed');
//   overlayShow();
// });

// basketCloseBtn.addEventListener('click', function () {
//   basket.classList.remove('basket--active');
//   body.classList.toggle('body--fixed');
//   overlayHide();
// });

// /*SIDE-MENU*/

// headerBurger.addEventListener('click', function () {
//   sideMenu.classList.add('side-menu--active');
//   body.classList.toggle('body--fixed');
//   overlayShow();
// });

// sideMenuCloseBtn.addEventListener('click', function () {
//   sideMenu.classList.remove('side-menu--active');
//   body.classList.toggle('body--fixed');
//   overlayHide();
// });

// /*CATALOG-SIDE*/

// catalogBtnSide.addEventListener('click', function () {
//   catalogBtnSide.classList.toggle('catalog__btn--active');
//   catalogListSide.classList.toggle('catalog__list--active-side');
//   body.classList.toggle('body--fixed');
//   overlayShow();
// });

// catalogListSide.addEventListener('click', function (event) {

//   let current = document.getElementsByClassName('catalog__link--active');

//   if (current.length > 0) {
//     for (const catalogLink of catalogLinks) {
//       catalogLink.classList.remove('catalog__link--active');
//     }
//   }

//   if (event.target.closest('.catalog__link')) {
//     event.target.classList.toggle('catalog__link--active');
//   }

// });

// /*SEARCH*/

// searchBtn.addEventListener('click', function () {
//   headerForm.classList.toggle('header__form--active');
// });

// /*COUNTER*/

// window.addEventListener('click', function(event) {

//   if (event.target.classList.contains('counter__btn--plus')) {

//     let counter = event.target.closest('.counter'),
//           counterValue = counter.querySelector('.counter__value').value,
//           value = parseInt(counterValue);

//     if (value <= 98) {
//      value++;
//     }

//     counter.querySelector('.counter__value').value = value;
//   }

//   if (event.target.classList.contains('counter__btn--minus')) {

//       let counter = event.target.closest('.counter'),
//           counterValue = counter.querySelector('.counter__value').value,
//           value = parseInt(counterValue);

//       if (value > 1) {
//         value--;
//       }

//       counter.querySelector('.counter__value').value = value;
//   }
// })

// //Make the icon inactive

// counterBtnIcon.forEach(counterBtnIcon => {
//   counterBtnIcon.style.pointerEvents = 'none';
// });

// /*COUNTER FOR ONE*/

// /*const counterBtnPlus = document.querySelector(".counter__btn--plus"),
//       counterBtnMinus = document.querySelector(".counter__btn--minus"),
//       counterValue = document.querySelector(".counter__value"),
//       total = document.querySelector(".product-card__sum");
  
// let price = document.querySelector(".prices__item").textContent,
//     currencу = document.querySelector(".currency");


// counterBtnPlus.addEventListener('click', function (e) {
  
//   e.preventDefault();
//   let $this = $(this);

//   let counterValue = $this.closest('div').find('input');
//   let value = parseInt(counterValue.val());

//   if (value <= 98) {
//     value++;
//     total.textContent = value * parseInt(price) + currencу.textContent;
//   }

//   counterValue.val(value);
// });

// counterBtnMinus.addEventListener('click', function (e) {

//   e.preventDefault();

//   let $this = $(this);
//   let counterValue = $this.closest('div').find('input');
//   let value = parseInt(counterValue.val());

//   if (value > 1) {
//     value--;
//     total.innerHTML = value * parseInt(price) + currencу.textContent;
//   }

//   counterValue.val(value);
// });*/