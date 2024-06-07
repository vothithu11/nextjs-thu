export const brandList = [
    {
        title:"Chăm sóc trẻ em",
        id: 1,
        completed: false,
        children: [
            {
                subTitle:"pamper",
                image:"/image/pampers.png",
                content:"Tã em bé",
            }, 
        ],
    },
    {
        title:"Chăm sóc vải",
        id: 2,
        completed: false,
        children: [
            {
                subTitle:"ariel",
                image:"/image/ariel.png",
                content:"Sản phẩm giặt là",
            }, 
            {
                subTitle:"downy",
                image:"/image/downy.png",
                content:"Chất bảo vệ & làm mềm vải",
            }, 
            {
                subTitle:"tide",
                image:"/image/tide.png",
                content:"Sản phẩm giặt là",
            }, 
        ],
    },
    {
        title:"Chăm sóc phụ nữ",
        id: 3,
        completed: false,
        children: [
            {
                subTitle:"whisper",
                image:"/image/whisper.png",
                content:"Băng vệ sinh chăm sóc phụ nữ",
            }, 
        ],
    },
    {
        title:"Grooming",
        id: 4,
        completed: false,
        children: [
            {
                subTitle:"gillette",
                image:"/image/gillette.png",
                content:"Dao cạo & Chăm sóc da",
            }, 
        ],
    },
    {
        title:"Chăm sóc tóc",
        id: 5,
        completed: false,
        children: [
            {
                subTitle:"pantene",
                image:"/image/pantene.png",
                content:"Chăm sóc Tóc",
            }, 
            {
                subTitle:"headshoulders",
                image:"/image/headshoulders.png",
                content:"Chăm sóc Tóc",
            }, 
        ],
    },
];

export const brandCatalogue = [
    {
        id: 1,
        title: "Chăm sóc Trẻ em"
    },
    {
        id: 2,
        title: "Chăm sóc vải"
    },
    {
        id: 3,
        title: "Chăm sóc Phụ nữ"
    },
    {
        id: 4,
        title: "Grooming"
    },
    {
        id: 5,
        title: "Chăm sóc Tóc"
    }
];
export const navigationlist = [
    {
        id: 1,
        title: "Giới thiệu",
        section:"hero"
    },
    {
        id: 2,
        title: "Cam kết và nỗ lực",
        section:"brands"
    },
    {
        id: 3,
        title: "Nỗ lực phát triển bền vững",
        section:"environment"
    },
    {
        id: 4,
        title: "Các trang web của P&G",
        section:"investor"
    }
];
export const navigationLabel = [
    {
        id: 1,
        title: "Các nhãn hiệu của chúng tôi",
        type: true,
        subTitle:[
            {
            sub:"Các nhãn hiệu",
            url:"/brands"
            },
            {
            sub:"Đổi mới",
            url:"/brands"
            }
        ]
    },
    {
        id: 2,
        title: "Ảnh hưởng của chúng tôi",
        type: true,
        subTitle:[
            {
            sub:"Ảnh hưởng cộng đồng",
            url:"/our"
            },
            {
            sub:"Bền vững",
            url:"/our"
            }
        ]
    },
    {
        id: 4,
        title: "Câu chuyện của chúng tôi",
        type: true,
        subTitle:[
            {
            sub:"Chúng tôi là ai",
            url:"/our"
            }
        ]
    }
];
export const investor = [
    {
        id: 1,
        title: "Quan hệ với nhà đầu từ",
        button:"Nhận thông tin nhà đầu tư",
        image:"/image/investor.png"
    },
    {
        id: 2,
        title: "Làm việc tại P&G",
        button:"Nhận thông tin nhà đầu tư",
        image:"/image/employer.png"
    },
];
export const inforContact = [
    {
        id: 1,
        title: "ĐỐI TÁC VÀ NHÀ ĐẦU TƯ",
        subTitle:[
            {sub:"Nhà đầu tư"},
            {sub:"Làm đối tác với chúng tôi"}
        ]
    },
    {
        id: 2,
        title: "CÔNG TY CHÚNG TÔI",
        subTitle:[
            {sub:"Lãnh đạo"},
            {sub:"Cấu trúc & Quản trị"},
            {sub:"Chính sách & Thực hành"},
            {sub:"Lưu trữ"},
            {sub:"Giải thưởng & công nhận"},
            {sub:"Tin tức"}
        ]
    },
    {
        id: 3,
        title: "HỮU ÍCH",
        subTitle:[
            {sub:"Sơ đồ trang web"}
        ]
    },
    {
        id: 4,
        title: "PHÁP LUẬT",
        subTitle:[
            {sub:"Thông báo bảo mật"},
            {sub:"Điều khoản & điều lệ"},
            {sub:"AdChoices"}
        ]
    },
];
export const images = [
    'image/hero_1.png',
    'image/hero_2.png',
    'image/hero_3.png',
    'image/hero_5.png'
  ];
export const social = [
    {
        id: 1,
        title: "Các nhãn hiệu của chúng tôi",
        image:"/image/social_1.png"
    },
    {
        id: 2,
        title: "Xem những nỗ lực môi trường của chúng tôi",
        image:"/image/social_2.png"
    },
    {
        id: 3,
        title: "Khám phá cách chúng tôi chọn những thành phần và những thành phần chúng tôi tránh",
        image:"/image/social_3.png"
    },
];
export const ourAction = [
    {
        id: 1,
        content: "Chúng tôi làm ra những sản phẩm chất lượng cao",
        title:"Xem các nhãn hiệu của chúng tôi",
        image:"https://images.ctfassets.net/ywowj8d94i8y/22fzonOQGkyAEkeY8wOoWq/28bfb645516907aeb4c92e535d182ba6/icon-who-we-are-our-commitment.svg"
    },
    {
        id: 2,
        content: "Sử dụng mỗi kg sức mạnh của chúng để tạo sự khác biệt",
        title:"Xem ảnh hưởng của chúng tôi",
        image:"https://images.ctfassets.net/ywowj8d94i8y/3dxFL3B8koKAKI8o4QeA48/b5215016f60fa560586b913b68bdcee0/icon-who-we-are-our-brands.svg"
    },
];

