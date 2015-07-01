'use strict';

/* Directives */
var INTEGER_REGEXP = /^\-?\d+$/;
RedcaviarControllers.directive('integer', function () {
    return {
        require: 'ngModel',
        link: function ($scope, $elm, $attrs, $ctrl) {
            $ctrl.$validators.integer = function (modelValue, viewValue) {

                console.log($attrs.integer);

                if (INTEGER_REGEXP.test(viewValue)) {
                    // it is valid
                    $scope.newrecept.multipleIngredients.items[$attrs.integer].invalid = 0;
                    return true;
                }

                if ($ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    //alert('пусто');
                    return true;
                }



                $scope.newrecept.multipleIngredients.items[$attrs.integer].invalid = 1;


                // it is invalid
                return false;
            };
        }
    };
});

RedcaviarControllers.directive('sliderhome', function ($location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function ($scope) {

            $scope.myInterval = 5000;
            var slides = $scope.slides = [
                {
                    image: 'img/banner1.jpg',
                    name: 'Икра красная "Застольная" 500гр',
                    cost: 890,
                    text: 'Сочная икра молодого лосося!!!! Высококачественный продукт премиум-класса. Многоступенчатая система контроля и тщательное соблюдение всех требований обеспечивает  высочайшее качество продукта.  В течение кратчайшего срока, а именно первые 3-4 часа, после  вылова  рыбы, красная икра проходит обработку и засолку, затем она расфасовывается в стерильную упаковку.'
                },
                {
                    image: 'img/banner2.jpg',
                    name: 'Икра зеленая  100гр',
                    cost: 890,
                    text: 'Сочная икра молодого бегемота!!!! Высококачественный продукт премиум-класса. Многоступенчатая система контроля и тщательное соблюдение всех требований обеспечивает  высочайшее качество продукта.  В течение кратчайшего срока, а именно первые 3-4 часа, после  вылова  рыбы, красная икра проходит обработку и засолку, затем она расфасовывается в стерильную упаковку.'
                },
                {
                    image: 'img/banner1.jpg',
                    name: 'Икра красная "Застольная" 500гр',
                    cost: 890,
                    text: 'Сочная икра молодого лосося!!!! Высококачественный продукт премиум-класса. Многоступенчатая система контроля и тщательное соблюдение всех требований обеспечивает  высочайшее качество продукта.  В течение кратчайшего срока, а именно первые 3-4 часа, после  вылова  рыбы, красная икра проходит обработку и засолку, затем она расфасовывается в стерильную упаковку.'
                }
            ];



            $scope.$watch(function () {
                return $location.path();
            }, function () {
                if ($location.path() == '/home')
                    $scope.show_banner = 1;
                else
                    $scope.show_banner = 0;
            });
        },
        templateUrl: '/modules/SliderHome.html'
    };
});

RedcaviarControllers.directive('tabsslidershome', function ($location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function ($scope) {

            $scope.tabs = [
                {title: 'Акции', class: 'tm-act', content: '<div class="cleaer_tab">Акции</div>'},
                {title: 'Хиты продаж', active: true, class: 'tm-act', content: ' <caruselgoods></caruselgoods>'},
                {title: 'Каллории', class: 'tm-act', content: '<div class="cleaer_tab">Каллории</div>'},
                {title: 'К празднику', class: 'tm-act', content: '<div class="cleaer_tab">К празднику</div>'},
            ];

            $scope.$watch(function () {
                return $location.path();
            }, function () {
                if ($location.path() == '/home')
                    $scope.show_tabs = 1;
                else
                    $scope.show_tabs = 0;
            });
        },
        templateUrl: '/modules/TabsSlidersHome.html'
    };
});

RedcaviarControllers.directive('leftmenu', function ($location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function ($scope) {

            $scope.getClass = function (bul) {
                if (bul) {
                    return 'active';
                } else {
                    return '';
                }
            }

            $scope.menuacc = [
                {title: 'Икра', content: [
                        {name: 'Product 1', link: '#/catalog'},
                        {name: 'Product 2', link: 'javascript:void(0)'}],
                    status: 0},
                {title: 'Рыба', content: [
                        {name: 'Product 1', link: 'javascript:void(0)'},
                        {name: 'Product 2', link: 'javascript:void(0)'}
                    ], status: 0},
                {title: 'Живая продукция', content: [
                        {name: 'Живая рыба', link: 'javascript:void(0)'},
                        {name: 'Живые раки', link: 'javascript:void(0)'},
                        {name: 'Краб', link: 'javascript:void(0)'},
                        {name: 'Лангустины', link: 'javascript:void(0)'},
                        {name: 'Омар', link: 'javascript:void(0)'},
                        {name: 'Устрицы и моллюски', link: 'javascript:void(0)'},
                    ], status: 1},
                {title: 'Морепродукты', content: [
                        {name: 'Product 1', link: 'javascript:void(0)'},
                        {name: 'Product 2', link: 'javascript:void(0)'}
                    ], status: 1},
                {title: 'Экзотика', content: [
                        {name: 'Product 1', link: 'javascript:void(0)'},
                        {name: 'Product 2', link: 'javascript:void(0)'}
                    ], status: 1},
                {title: 'Подарочный набор', content: [
                        {name: 'Product 1', link: 'javascript:void(0)'},
                        {name: 'Product 2', link: 'javascript:void(0)'}
                    ], status: 1},
            ];

//bedin
            $scope.oneAtATime = true;

            $scope.groups = [
                {
                    title: 'Dynamic Group Header - 1',
                    content: 'Dynamic Group Body - 1'
                },
                {
                    title: 'Dynamic Group Header - 2',
                    content: 'Dynamic Group Body - 2'
                }
            ];

            $scope.items = ['Item 1', 'Item 2', 'Item 3'];

            $scope.addItem = function () {
                var newItemNo = $scope.items.length + 1;
                $scope.items.push('Item ' + newItemNo);
            };

            $scope.status = {
                isFirstOpen: true,
                isFirstDisabled: false
            };
//end          


            $scope.$watch(function () {
                return $location.path();
            }, function () {
                if ($location.path() == '/home')
                    $scope.show_tabs = 1;
                else
                    $scope.show_tabs = 0;
            });
        },
        templateUrl: '/modules/leftmenu.html'
    };
});

RedcaviarControllers.directive('recept', function ($location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function ($scope) {

            $scope.social = false;
            $scope.show_social = function () {
                $scope.social = $scope.social === false ? true : false;
            }
            $scope.slides = [
                {html: 'test1'},
                {html: 'test2'},
                {html: 'test3'}
            ];



            $scope.$watch(function () {
                return $location.path();
            }, function () {
                if ($location.path() == '/home')
                    $scope.show_futer_modules = 1;
                else
                    $scope.show_futer_modules = 0;
            });
        },
        templateUrl: '/modules/recept.html'


    };
});
RedcaviarControllers.directive('dieta', function ($location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function ($scope) {

            $scope.slides = [
                {html: 'test1'},
                {html: 'test2'},
                {html: 'test3'}
            ];

            $scope.social = false;
            $scope.show_social = function () {
                $scope.social = $scope.social === false ? true : false;
            }

            $scope.$watch(function () {
                return $location.path();
            }, function () {
                if ($location.path() == '/home')
                    $scope.show_futer_modules = 1;
                else
                    $scope.show_futer_modules = 0;
            });
        },
        templateUrl: '/modules/dieta.html'


    };
});

RedcaviarControllers.directive('filter', function ($location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function ($scope) {
            $scope.$watch(function () {
                return $location.path();
            }, function () {
                if ($location.path() == '/catalog')
                    $scope.show_left_filter = 1;
                else
                    $scope.show_left_filter = 0;
            });
        },
        templateUrl: '/modules/leftfiltr.html'
    };
});
//Топ меню
RedcaviarControllers.directive('topmenu', function ($location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function ($scope) {

            $scope.topmenu = [
                {title: 'Икра', href: '/home', checked: '0', class: '', submenu: [
                        {title: 'Икра1', href: '/home', cheked: '0', submenu: []},
                        {title: 'Икра2', href: '/home', cheked: '0', submenu: []},
                        {title: 'Икра3', href: '/home', cheked: '0', submenu: []},
                        {title: 'Икра4', href: '/home', cheked: '0', submenu: []}
                    ]},
                {title: 'Рыба', href: '/home', checked: '0', class: '', submenu: [
                        {title: 'Рыба1', href: '/home', cheked: '0', submenu: []},
                        {title: 'Рыба2', href: '/home', cheked: '0', submenu: []},
                        {title: 'Рыба3', href: '/home', cheked: '0', submenu: []},
                        {title: 'Рыба4', href: '/home', cheked: '0', submenu: []}
                    ]},
                {title: 'Живая продукция', href: '/home', checked: '0', class: '', submenu: [
                        {title: 'Краб', href: '/home', cheked: '0', submenu: []},
                        {title: 'Устрицы и моллю', href: '/home', cheked: '0', submenu: []},
                        {title: 'Живые раки', href: '/home', cheked: '0', submenu: []},
                        {title: 'Омар', href: '/home', cheked: '0', submenu: []},
                        {title: 'Лангустины', href: '/home', cheked: '0', submenu: []}
                    ]},
                {title: 'Морепродукты', href: '/home', checked: '0', class: '', submenu: [
                        {title: 'Морепродукт1', href: '/home', cheked: '0', submenu: []},
                        {title: 'Морепродукт2', href: '/home', cheked: '0', submenu: []},
                        {title: 'Морепродукт3', href: '/home', cheked: '0', submenu: []},
                        {title: 'Морепродукт4', href: '/home', cheked: '0', submenu: []}
                    ]},
                {title: 'Экзотика', href: '/home', checked: '0', class: '', submenu: [
                        {title: 'Экзотика1', href: '/home', cheked: '0', submenu: []},
                        {title: 'Экзотика2', href: '/home', cheked: '0', submenu: []},
                        {title: 'Экзотика3', href: '/home', cheked: '0', submenu: []},
                        {title: 'Экзотика4', href: '/home', cheked: '0', submenu: []}
                    ]},
                {title: 'Аксессуары', href: '/home', checked: '0', class: '', submenu: [
                        {title: 'Аксессуар1', href: '/home', cheked: '0', submenu: []},
                        {title: 'Аксессуар2', href: '/home', cheked: '0', submenu: []},
                        {title: 'Аксессуар3', href: '/home', cheked: '0', submenu: []},
                        {title: 'Аксессуар4', href: '/home', cheked: '0', submenu: []}
                    ]}
            ];



            $scope.activeted_menu = function (index) {
                for (var i = 0; i < $scope.topmenu.length; i++) {
                    if (index == i) {
                        if ($scope.topmenu[i].checked == 1) {
                            $scope.topmenu[i].checked = 0;
                            $scope.topmenu[i].class = '';
                        } else {
                            $scope.topmenu[i].checked = 1;
                            $scope.topmenu[i].class = 'active';
                        }
                    } else {
                        $scope.topmenu[i].checked = 0;
                        $scope.topmenu[i].class = '';
                    }
                }
            }

            $scope.activ_catalog = false;
            $scope.menu_activeted = function () {
                $scope.activ_catalog = $scope.activ_catalog === false ? true : false;
            }


//            $scope.$watch(function () {
//                return $location.path();
//            }, function () {
//                if ($location.path() == '/catalog')
//                    $scope.show_left_filter = 1;
//                else
//                    $scope.show_left_filter = 0;
//            });
        },
        templateUrl: '/modules/topmenu.html'
    };
});

RedcaviarControllers.directive('caruselgoods', function ($location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function ($scope) {

            $scope.myInterval = 5000;
            var slides = $scope.slides = [
                {items: [
                        {cost: 110, image: 'img/goods/goods2.jpg'},
                        {cost: 120, image: 'img/goods/caviar1_123x87.jpg'},
                        {cost: 130, image: 'img/goods/goods2.jpg'},
                        {cost: 140, image: 'img/goods/caviar1_123x87.jpg'},
                        {cost: 150, image: 'img/goods/goods2.jpg'}
                    ]},
                {items: [
                        {cost: 210, image: 'img/goods/caviar1_123x87.jpg'},
                        {cost: 220, image: 'img/goods/caviar1_123x87.jpg'},
                        {cost: 230, image: 'img/goods/caviar1_123x87.jpg'},
                        {cost: 240, image: 'img/goods/caviar1_123x87.jpg'},
                        {cost: 250, image: 'img/goods/caviar1_123x87.jpg'}
                    ]},
                {items: [
                        {cost: 310, image: 'img/goods/goods2.jpg'},
                        {cost: 320, image: 'img/goods/goods2.jpg'},
                        {cost: 330, image: 'img/goods/goods2.jpg'},
                        {cost: 340, image: 'img/goods/caviar1_123x87.jpg'},
                        {cost: 350, image: 'img/goods/caviar1_123x87.jpg'}
                    ]}
            ];



//            $scope.$watch(function () {
//                return $location.path();
//            }, function () {
//                if ($location.path() == '/catalog')
//                    $scope.show_left_filter = 1;
//                else
//                    $scope.show_left_filter = 0;
//            });
        },
        templateUrl: '/modules/caruselgoods.html'
    };
});


RedcaviarControllers.directive('compile', ['$compile', function ($compile) {
        return function (scope, element, attrs) {
            scope.$watch(
                    function (scope) {
                        // watch the 'compile' expression for changes
                        return scope.$eval(attrs.compile);
                    },
                    function (value) {
                        // when the 'compile' expression changes
                        // assign it into the current DOM
                        element.html(value);

                        // compile the new DOM and link it to the current
                        // scope.
                        // NOTE: we only compile .childNodes so that
                        // we don't get into infinite loop compiling ourselves
                        $compile(element.contents())(scope);
                    }
            );
        };
    }]);



//Инфомодуль карусели на главной

RedcaviarControllers.directive('infomodul', function ($location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function ($scope) {
            $scope.myInterval = 6000;
            $scope.slides = [
                {html: '<img src="img/maincar1.jpg">' +
                            '<span class="cc_title">Мы заботимся о Вашем времени &mdash; удобная доставка морепродуктов по Москве !</span>' +
                            '<span class="cc_text">' +
                            '<p>' +
                            'Вам не нужно тратить время на поход в магазин, отстаивать огромные очереди в супермаркетах ( особенно в праздничные дни), не говоря о пробках и поиске парковки рядом с супермаркетом. Заказывая товары у нас, Вы получаете удобную и быструю доставку.</p>' +
                            '<p>При заказе Вы можете выбрать удобное для Вас время доставки и мы подвезём морепродукты точно в срок по нужному Вам адресу.</p>' +
                            '<p>Наши специалисты помогут Вам выбрать наиболее подходящие для Вас продукты, проконсультируют по всем вопросам, связанных с вопросами хранения, состава и использования продуктов нашего магазина.</p>' +
                            '<p>Всё это мы делаем что бы Вы получили по настоящему качественный, полезный и свежий продукт на Вашем столе! С нами Ваше повседневное и праздничное меню станет более полезным, разнообразным и вкусным!' +
                            '</p>' +
                            '</span>'},
                {html: '<img src="img/maincar1.jpg">' +
                            '<span class="cc_title">Мы заботимся о Вашем времени &mdash; удобная доставка морепродуктов по Москве !</span>' +
                            '<span class="cc_text">' +
                            '<p>' +
                            'Вам не нужно тратить время на поход в магазин, отстаивать огромные очереди в супермаркетах ( особенно в праздничные дни), не говоря о пробках и поиске парковки рядом с супермаркетом. Заказывая товары у нас, Вы получаете удобную и быструю доставку.</p>' +
                            '<p>При заказе Вы можете выбрать удобное для Вас время доставки и мы подвезём морепродукты точно в срок по нужному Вам адресу.</p>' +
                            '<p>Наши специалисты помогут Вам выбрать наиболее подходящие для Вас продукты, проконсультируют по всем вопросам, связанных с вопросами хранения, состава и использования продуктов нашего магазина.</p>' +
                            '<p>Всё это мы делаем что бы Вы получили по настоящему качественный, полезный и свежий продукт на Вашем столе! С нами Ваше повседневное и праздничное меню станет более полезным, разнообразным и вкусным!' +
                            '</p>' +
                            '</span>'},
                {html: '<img src="img/maincar1.jpg">' +
                            '<span class="cc_title">Мы заботимся о Вашем времени &mdash; удобная доставка морепродуктов по Москве !</span>' +
                            '<span class="cc_text">' +
                            '<p>' +
                            'Вам не нужно тратить время на поход в магазин, отстаивать огромные очереди в супермаркетах ( особенно в праздничные дни), не говоря о пробках и поиске парковки рядом с супермаркетом. Заказывая товары у нас, Вы получаете удобную и быструю доставку.</p>' +
                            '<p>При заказе Вы можете выбрать удобное для Вас время доставки и мы подвезём морепродукты точно в срок по нужному Вам адресу.</p>' +
                            '<p>Наши специалисты помогут Вам выбрать наиболее подходящие для Вас продукты, проконсультируют по всем вопросам, связанных с вопросами хранения, состава и использования продуктов нашего магазина.</p>' +
                            '<p>Всё это мы делаем что бы Вы получили по настоящему качественный, полезный и свежий продукт на Вашем столе! С нами Ваше повседневное и праздничное меню станет более полезным, разнообразным и вкусным!' +
                            '</p>' +
                            '</span>'},
                {html: '<img src="img/maincar1.jpg">' +
                            '<span class="cc_title">Мы заботимся о Вашем времени &mdash; удобная доставка морепродуктов по Москве !</span>' +
                            '<span class="cc_text">' +
                            '<p>' +
                            'Вам не нужно тратить время на поход в магазин, отстаивать огромные очереди в супермаркетах ( особенно в праздничные дни), не говоря о пробках и поиске парковки рядом с супермаркетом. Заказывая товары у нас, Вы получаете удобную и быструю доставку.</p>' +
                            '<p>При заказе Вы можете выбрать удобное для Вас время доставки и мы подвезём морепродукты точно в срок по нужному Вам адресу.</p>' +
                            '<p>Наши специалисты помогут Вам выбрать наиболее подходящие для Вас продукты, проконсультируют по всем вопросам, связанных с вопросами хранения, состава и использования продуктов нашего магазина.</p>' +
                            '<p>Всё это мы делаем что бы Вы получили по настоящему качественный, полезный и свежий продукт на Вашем столе! С нами Ваше повседневное и праздничное меню станет более полезным, разнообразным и вкусным!' +
                            '</p>' +
                            '</span>'}
            ];

//            $scope.$watch(function () {
//                return $location.path();
//            }, function () {
//                if ($location.path() == '/catalog')
//                    $scope.show_left_filter = 1;
//                else
//                    $scope.show_left_filter = 0;
//            });
        },
        templateUrl: '/modules/infomodul.html'
    };
});


RedcaviarControllers.directive('minimodul', function ($location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            modul: '@'
        },
        controller: function ($scope) {

            if ($scope.modul == 'product_day') {
                $scope.slides = [
                    {html: '<div class="blockcontent">' +
                                '<h3 class="maincont_title">Товар дня:</h3>' +
                                '<span class="block_td_renew"><a href="#/home">Обновить</a></span>' +
                                '<span class="block_td_renewimg"><a href="#/home"><img src="img/icons/i-renew_33x34.png"></a></span>' +
                                '<div class="block_td_mainimage">' +
                                '<img src="img/goods/tovardnya1.jpg" width="263" height="162" alt="Товар дня">' +
                                '</div>' +
                                '<div class="block_td_maintext">' +
                                'Раки живые 40-60 гр.<br>' +
                                '(15-25 шт./кг)' +
                                '</div>' +
                                '<div class="block_td_action">' +
                                '<h5>Успей купить!</h5>' +
                                'Количество ограничено!' +
                                '</div>' +
                                '</div>'},
                    {html: 'test2'},
                    {html: 'test3'},
                    {html: 'test4'}
                ];
            }


            if ($scope.modul == 'news') {
                $scope.slides = [
                    {html: '<div class="blockcontent">' +
                                '<div class="maincont_title"><span class="title">Новости</span><span class="date">23.03.2015</span></div>' +
                                '<div class="block_news_img">' +
                                '<img src="img/news1.jpg">' +
                                '</div>' +
                                '<div class="block_news_text">' +
                                '<p>Выведеный в Сочи новый вид форели обеспечит почти круглогодичное производство красной икры</p>' +
                                '<a href="#/home" class="block_news_button">Подробнее</a>' +
                                '</div>' +
                                '</div>'},
                    {html: 'test2'},
                    {html: 'test3'},
                    {html: 'test4'}
                ];
            }

            if ($scope.modul == 'video') {
                $scope.slides = [
                    {html: '<div class="blockcontent">' +
                                '<h3 class="maincont_title">Видео</h3>' +
                                '<div class="block_video_youtube">' +
                                '<iframe width="258" height="164" src="https://www.youtube.com/embed/y_RA4bzWaAU?showinfo=0&iv_load_policy=3&controls=1" frameborder="0" allowfullscreen align="center"></iframe>' +
                                '</div>' +
                                '<div class="block_video_desc">' +
                                'Фасовка красной икры' +
                                '</div>' +
                                '<div class="block_video_yr">' +
                                '<div class="block_video_yr_rating">' +
                                '4.5<br>' +
                                '<img src="img/icons/stars.png">' +
                                '</div>' +
                                '<div class="block_video_yr_logo">' +
                                '<a href="#/home"><img src="img/youtubelogo.jpg" width="25" height="31" alt="Youtube"></a>' +
                                '</div>' +
                                '<div class="block_video_yr_repost">' +
                                '<a href="#/home"><img src="img/icons/i-repost_21x21.png" width="21" height="21" alt="Поделиться"></a>' +
                                '<a href="#/home" class="bvyr">Поделиться</a>' +
                                '</div>' +
                                '</div>' +
                                '</div>'},
                    {html: 'test2'},
                    {html: 'test3'},
                    {html: 'test4'}
                ];
            }

            if ($scope.modul == 'last_reviews') {
                $scope.slides = [
                    {html: '<div class="r-slider">' +
                                '<h3 class="maincont_title">Последние отзывы</h3>' +
                                '<div class="blockcontent">' +
                                '<div class="review">' +
                                '<div class="review-head">' +
                                '<div class="avatar">' +
                                '<img src="img/avatar.png" height="156" width="155" alt="">' +
                                '</div>' +
                                '<div class="bio">' +
                                '<h2>Сергей</h2>' +
                                '<p class="date">16.07.2014 &nbsp; 17:00:43</p>' +
                                '<ul class="social-icons">' +
                                '<li><img src="img/icons/i-vk_44x44.png" height="44" width="44" alt=""></li>' +
                                '</ul>' +
                                '</div>' +
                                '</div>' +
                                '<div class="review-middle">' +
                                '<p>Хорошее качество самого продукта. Икру' +
                                'доставили в течение дня. Очень понравился' +
                                'сервис обслуживания на сайте. Теперь каждый' +
                                'раз заказываю здесь, как только' +
                                'заканчиваются банки с икрой.' +
                                '</p>' +
                                '</div>' +
                                '<div class="review-footer">' +
                                '<ul class="foot-links">' +
                                '<li><a href="#/home">Ответить</a></li>' +
                                '<li><a href="#/home">Ссылка</a></li>' +
                                '</ul>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>'},
                    {html: 'test2'},
                    {html: 'test3'},
                    {html: 'test4'}
                ];

            }
            $scope.myInterval = false;

//            $scope.$watch(function () {
//                return $location.path();
//            }, function () {
//                if ($location.path() == '/catalog')
//                    $scope.show_left_filter = 1;
//                else
//                    $scope.show_left_filter = 0;
//            });
        },
        templateUrl: '/modules/minimodul.html'
    };
});





