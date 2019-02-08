<!-- sidebar menu -->
<?php

$admin_nav = [
    [
        'module' => 'dashboard',
        'text' => 'Dashboard',
        'icon' => 'fa-home',
        'link' => url('/admin/dashboard')
    ],
    [
        'module' => 'dashboard',
        'text' => 'User management',
        'icon' => 'fa-user',
        'link' =>[
            [
                'module' => 'customer',
                'text' => 'Manage Customers',
                'icon' => 'fa-user',
                'link' => [
                    [
                        'module' => 'customer',
                        'text' => 'Customers List',
                        'link' => url('/admin/customer'),
                    ],
                    [
                        'module' => 'customer',
                        'text' => 'New Customer',
                        'link' => url('/admin/customer/create'),
                    ]
                ]
            ],
            [
                'module' => 'organizer',
                'text' => 'Manage Organizers',
                'icon' => 'fa-users',
                'link' => [
                    [
                        'module' => 'organizer',
                        'text' => 'Organizers List',
                        'link' => url('/admin/organizer'),
                    ],
                    [
                        'module' => 'organizer',
                        'text' => 'New Organizer',
                        'link' => url('/admin/organizer/create'),
                    ]
                ]
            ],
            [
                'module' => 'merchant',
                'text' => 'Manage Merchants',
                'icon' => 'fa-puzzle-piece',
                'link' => [
                    [
                        'module' => 'merchant',
                        'text' => 'Merchants List',
                        'link' => url('/admin/merchant'),
                    ],
                    [
                        'module' => 'merchant',
                        'text' => 'New Merchant',
                        'link' => url('/admin/merchant/create'),
                    ]
                ]
            ],
            [
                'module' => 'store-admin',
                'text' => 'Manage Store Admin',
                'icon' => 'fa-shopping-cart',
                'link' => [
                    [
                        'module' => 'store-admin',
                        'text' => 'Store Admin List',
                        'link' => url('/admin/store-admin'),
                    ],
                    [
                        'module' => 'store-admin',
                        'text' => 'New Store Admin',
                        'link' => url('/admin/store-admin/create'),
                    ]
                ]
            ],
            [
                'module' => 'support-employee',
                'text' => 'Manage Support Employees',
                'icon' => 'fa-life-ring',
                'link' => [
                    [
                        'module' => 'support-employee',
                        'text' => 'Employees List',
                        'link' => url('/admin/support-employee'),
                    ],
                    [
                        'module' => 'support-employee',
                        'text' => 'New Employee',
                        'link' => url('/admin/support-employee/create'),
                    ]
                ]
            ],
        ]
    ],
    [
        'module' => 'dashboard',
        'text' => 'Event management',
        'icon' => 'fa-tasks',
        'link' =>[
            [
                'module' => 'event-category',
                'text' => 'Manage Event Categories',
                'icon' => 'fa-folder',
                'link' => [
                    [
                        'module' => 'event-category',
                        'text' => 'Event Categories List',
                        'link' => url('/admin/event-category'),
                    ],
                    [
                        'module' => 'event-category',
                        'text' => 'New Event Category',
                        'link' => url('/admin/event-category/create'),
                    ]
                ]
            ],
            [
                'module' => 'event-subcategory',
                'text' => 'Manage Event Subcategories',
                'icon' => 'fa-folder-open',
                'link' => [
                    [
                        'module' => 'event-subcategory',
                        'text' => 'Event Subcategories List',
                        'link' => url('/admin/event-subcategory'),
                    ],
                    [
                        'module' => 'event-category',
                        'text' => 'New Event Subcategory',
                        'link' => url('/admin/event-subcategory/create'),
                    ]
                ]
            ],
            [
                'module' => 'venue-types',
                'text' => 'Manage Venue Types',
                'icon' => 'fa-location-arrow',
                'link' => [
                    [
                        'module' => 'venue-types',
                        'text' => 'Venue Types List',
                        'link' => url('/admin/venue-types'),
                    ],
                    [
                        'module' => 'venue-types',
                        'text' => 'New Venue Type',
                        'link' => url('/admin/venue-types/create'),
                    ]
                ]
            ],
            [
                'module' => 'venue',
                'text' => 'Manage Venues',
                'icon' => 'fa-university',
                'link' => [
                    [
                        'module' => 'venue',
                        'text' => 'Venues List',
                        'link' => url('/admin/venue'),
                    ],
                    [
                        'module' => 'venue',
                        'text' => 'New Venue',
                        'link' => url('/admin/venue/create'),
                    ]
                ]
            ],
            [
                    'module' => 'merchandise',
                'text' => 'Manage Merchandises',
                'icon' => 'fa-cog',
                'link' => [
                    [
                        'module' => 'merchandise',
                        'text' => 'Merchandises List',
                        'link' => url('/admin/merchandise'),
                    ],
                    [
                        'module' => 'merchandise',
                        'text' => 'New Merchandise',
                        'link' => url('/admin/merchandise/create'),
                    ]
                ]
            ],
            [
                'module' => 'manage-ticket-type',
                'text' => 'Manage Ticket Type',
                'icon' => 'fa-cog',
                'link' => [
                    [
                        'module' => 'manage-ticket-type',
                        'text' => 'Ticket Type List',
                        'link' => url('/admin/ticket-type'),
                    ],
                    [
                        'module' => 'manage-ticket-type',
                        'text' => 'New Ticket Type',
                        'link' => url('/admin/ticket-type/create'),
                    ]
                ]
            ],
            [
                'module' => 'manage-groups',
                'text' => 'Manage Groups',
                'icon' => 'fa-cog',
                'link' => [
                    [
                        'module' => 'manage-groups',
                        'text' => 'Groups List',
                        'link' => url('/admin/group'),
                    ],
                    [
                        'module' => 'manage-groups',
                        'text' => 'New Group',
                        'link' => url('/admin/group/create'),
                    ]
                ]
            ],
            [
                'module' => 'manage-packages',
                'text' => 'Manage Packages',
                'icon' => 'fa-cog',
                'link' => [
                    [
                        'module' => 'manage-packages',
                        'text' => 'Packages List',
                        'link' => url('/admin/package'),
                    ],
                    [
                        'module' => 'manage-packages',
                        'text' => 'New Packages',
                        'link' => url('/admin/package/create'),
                    ]
                ]
            ],
            [
                'module' => 'seating-maps',
                'text' => 'Seating Maps Management',
                'icon' => 'fa-life-ring',
                'link' => [
                    [
                        'module' => 'seating-maps',
                        'text' => 'Seating Maps List',
                        'link' => url('/admin/seating-maps'),
                    ],
                    [
                        'module' => 'seating-maps',
                        'text' => 'New Seating Maps',
                        'link' => url('/admin/seating-maps/create'),
                    ]
                ]
            ],
            [
                'module' => 'event',
                'text' => 'Manage Event',
                'icon' => 'fa-calendar',
                'link' => [
                    [
                        'module' => 'event',
                        'text' => 'Events List',
                        'link' => url('/admin/event'),
                    ],
                    [
                        'module' => 'event',
                        'text' => 'New Event',
                        'link' => url('/admin/event/add/step-1'),
                    ]
                ]
            ]
        ]
    ],
    [
        'module' => 'booking',
        'text' => 'Manage Bookings',
        'icon' => 'fa-book',
        'link' => url('/admin/booking')
    ],
    [
        'module' => 'payment',
        'text' => 'Manage Payments',
        'icon' => 'fa-money',
        'link' => url('/admin/payment')
    ],
    [
        'module' => 'report',
        'text' => 'Reports & Analytics',
        'icon' => 'fa-bar-chart',
        'link' => [
            [
                'module' => 'report',
                'text' => 'Tickets',
                'link' => url('/admin/report/tickets'),
            ],
            [
                'module' => 'report',
                'text' => 'Customers',
                'link' => url('/admin/report/customers'),
            ]
        ]
    ],
    [
        'module' => 'case-study',
        'text' => 'Manage Case Studies',
        'icon' => 'fa-book',
        'link' => [
            [
                'module' => 'case-study',
                'text' => 'Case Studies List',
                'link' => url('/admin/case-study'),
            ],
            [
                'module' => 'case-study',
                'text' => 'New Case Study',
                'link' => url('/admin/case-study/create'),
            ]
        ]
    ],
    [
        'module' => 'enquiries',
        'text' => 'Manage Enquiries',
        'icon' => 'fa-phone',
        'link' => url('/admin/enquiries')
    ],
    /*
    [
        'module' => 'email-notifications',
        'text' => 'Manage Notifications',
        'icon' => 'fa-bell',
        'link' => [
            [
                'module' => 'email-notifications',
                'text' => 'Email List',
                'link' => url('/admin/email-notifications'),
            ],
            [
                'module' => 'sms-notifications',
                'text' => 'SMS List',
                'link' => url('/admin/sms-notifications'),
            ]
        ]
    ],
    */
    [
        'module' => 'cms-manager',
        'text' => 'Manage CMS Pages',
        'icon' => 'fa-folder-open',
        'link' =>[
            [
                'module' => 'cms-manager',
                'text' => 'Static Pages',
                'link' => url('/admin/cms-manager')
            ],
            [
                'module' => 'cms-manager',
                'text' => 'About us',
                'link' => url('/admin/about-us'),
            ],
            [
                'module' => 'cms-manager',
                'text' => 'Manage Pricing',
                'link' => [
                    [
                        'module' => 'cms-manager',
                        'text' => 'Pricing',
                        'link' => url('/admin/pricing'),
                    ],
                    [
                        'module' => 'cms-manager',
                        'text' => 'New Pricing',
                        'link' => url('/admin/pricing/create'),
                    ]
                ]
            ],
            [
                'module' => 'cms-manager',
                'text' => 'Manage Faq',
                'link' => [
                    [
                        'module' => 'cms-manager',
                        'text' => 'Faq',
                        'link' => url('/admin/faq'),
                    ],
                    [
                        'module' => 'cms-manager',
                        'text' => 'New Faq',
                        'link' => url('/admin/faq/create'),
                    ]
                ]
            ],
            [
                'module' => 'cms-manager',
                'text' => 'Manage Slider',
                'link' => [
                    [
                        'module' => 'cms-manager',
                        'text' => 'Slider Images',
                        'link' => url('/admin/slider-image'),
                    ],
                    [
                        'module' => 'cms-manager',
                        'text' => 'New Slider',
                        'link' => url('/admin/slider-image/create'),
                    ]
                ]
            ],
            [
                'module' => 'cms-manager',
                'text' => 'Home Top Categories',
                'link' => url('/admin/home-top-category')
            ],
        ]
    ],
    [
        'module' => 'contact-setting',
        'text' => 'General Settings',
        'icon' => 'fa-cogs',
        'link' => [
            [
                'module' => 'contact-setting',
                'text' => 'Contact Details',
                'link' => url('/admin/contact-setting'),
            ],
            [
                'module' => 'social-setting',
                'text' => 'Social',
                'link' => url('/admin/social-setting'),
            ],
            [
                'module' => 'general-setting',
                'text' => 'Finance',
                'link' => url('/admin/general-setting'),
            ]
        ]
    ],
];
$user=Auth::guard('api')->user();
$organizer_employee_assign_module_slugs=[];

?>
<div class="col-md-3 left_col menu_fixed">
    <div class="left_col scroll-view">

        <div class="navbar nav_title" style="border: 0;">
            <a href="{{url('/admin/dashboard')}}" class="site_title"> <span>{{env('APP_NAME')}}</span></a>
        </div>

        <div class="clearfix"></div>

        <!-- menu profile quick info -->
        <div class="profile clearfix">
            <div class="profile_pic">
                <img src="{{asset("public/backend//images/img.jpg")}}" alt="..." class="img-circle profile_img">
            </div>
            <div class="profile_info">
                <span>Welcome,</span>
                <h2>{{$user->name}}</h2>
            </div>
            <div class="clearfix"></div>
        </div>
        <!-- /menu profile quick info -->

        <br />

        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
                <h3>Navigation</h3>
                <ul class="nav side-menu">

                    @foreach($admin_nav as $item)
                        <!-- Check is user is admin else if support employee then check support employee access module or not -->
                        @if(($user->user_role == 1) || in_array($item['module'], $organizer_employee_assign_module_slugs))

                            <!--- If Navigation single---->
                            @if(!is_array($item['link']))

                                <li class=""><a href="{{$item['link']}}"><i class="fa {{$item['icon']}}"></i> {{$item['text']}} </a></li>

                            @else
                                <!-------------- Navigation id multiple --------->
                                <li>
                                    <a>
                                        <i class="fa {{$item['icon']}}"></i>
                                        {{$item['text']}}
                                        <span class="fa fa-chevron-down"></span>
                                    </a>

                                    <ul class="nav child_menu">

                                        @foreach($item['link'] as $sub_link)
                                            <!-- check if sub link is access ot not -->
                                            @if(($user->user_role == 1) || in_array($sub_link['module'], $organizer_employee_assign_module_slugs))

                                                @if(!is_array($sub_link['link']))
                                                    <li><a href="{{$sub_link['link']}}">{{$sub_link['text']}}</a></li>
                                                @else

                                                    <li>
                                                        <a>
                                                            {{$sub_link['text']}}
                                                            <span class="fa fa-chevron-down"></span>
                                                        </a>

                                                        <ul class="nav child_menu">
                                                            @foreach($sub_link['link'] as $sub_link_list)
                                                                <li class="sub_menu">
                                                                    <a href="{{$sub_link_list['link']}}">{{$sub_link_list['text']}}</a>
                                                                </li>
                                                            @endforeach
                                                        </ul>

                                                    </li>
                                                @endif
                                            @endif
                                        @endforeach
                                    </ul>
                                </li>
                            @endif
                        @endif
                    @endforeach
                </ul>
            </div>
        </div>
    <!-- /sidebar menu -->
    </div>
</div>
