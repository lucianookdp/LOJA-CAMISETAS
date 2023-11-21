import fs from 'fs/promises';

  const products = [
    {
      id: 1,
      type: "br",
      title: "Camisa Adidas Flamengo I",
      price: 264.9,
      image:
        "https://static3.tcdn.com.br/img/img_prod/311840/camisa_adidas_flamengo_i_2023_114358_1_d8763bdea9e32312aea69b5ddbaee0e8.jpg",
    },
    {
      id: 2,
      type: "br",
      title: "Camisa Adidas Flamengo II",
      price: 295,
      image:
        "https://static3.tcdn.com.br/img/img_prod/311840/camisa_adidas_flamengo_ii_2023_114362_1_43149233e98369bbfb4f90a9c9f46664.jpg",
    },
    {
      id: 3,
      type: "man",
      title: "Chestnut Brown",
      price: 74.9,
      image:
        "https://pangaia.com/cdn/shop/products/Recycled-Cashmere-Core-Hoodie-Chestnut-Brown-Male-1.jpg?v=1663947464&width=1426",
    },
    {
      id: 4,
      type: "man",
      title: "Nike Sportswear",
      price: 80,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61734ec7-dad8-40f3-9b95-c7500939150a/sportswear-club-mens-french-terry-crew-neck-sweatshirt-tdFDRc.png",
    },
    {
      id: 5,
      type: "woman",
      title: "Champion BASIC",
      price: 48.99,
      image:
        "https://img01.ztat.net/article/spp-media-p1/7067458719b744fe81ffee62d3d0b912/abad421e7d8e47f08a2abc1c6ffe07dc.jpg?imwidth=1800",
    },
    {
      id: 6,
      type: "woman",
      title: "Cotton Hoodie",
      price: 395,
      image:
        "https://pangaia.com/cdn/shop/files/Reclaim-3.0-Hoodie-Reclaim-Jade-Womens-3.jpg?v=1693398673&width=1426",
    },
    {
      id: 7,
      type: "man",
      title: "CLASSIC CREWNECK",
      price: 48.99,
      image:
        "https://img01.ztat.net/article/spp-media-p1/10cea44041564f81ac585fc6c8978907/c4c32dbc45dd4dbc9d15087c846538f2.jpg?imwidth=1800",
    },
    {
      id: 8,
      type: "kids",
      title: "TAPE HOODED",
      price: 79.99,
      image:
        "https://img01.ztat.net/article/spp-media-p1/d391f90be278469ebfdff731800cfccc/6d2101bd672f4e059501f01fe726f315.jpg?imwidth=1800",
    },
  ];

export default products