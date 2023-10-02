window.onload = function () {
 
    var Menu = document.getElementById('Menu');
    var Menu_Btn = document.getElementById('Menu_Btn');
    var Brands_Box = document.getElementById('Brands_Box');
    var count = 0;
    Menu_Btn.onclick = function () {
        if (count % 2 == 0) {
            Menu.style.height = '400px';
            Menu.style.transition = '0.4s';
            Menu.style.padding = '40px 0'
            Menu_Btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            Menu.style.padding = '0'
            Menu.style.height = '0';
            Menu.style.transition = '0.4s';
            Menu_Btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
        count++
    }

    var Brands = [

        {
            id: 1,
            image: '../Work_Page/assets/brands/1.jpg',
            descriptipn: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
            Brand_Name: 'Stockholm Fashion',
            Brand_sphere: 'Art, Photography'
        },
        {
            id: 2,
            image: '../Work_Page/assets/brands/2.jpg',
            descriptipn: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
            Brand_Name: 'Berlin Design Week',
            Brand_sphere: 'Art, Business'
        },
        {
            id: 3,
            image: '../Work_Page/assets/brands/3.jpg',
            descriptipn: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
            Brand_Name: 'Venice Art Pavilion',
            Brand_sphere: 'Business'
        },
        {
            id: 4,
            image: '../Work_Page/assets/brands/4.jpg',
            descriptipn: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
            Brand_Name: 'Vimeo FX Showreel',
            Brand_sphere: 'Business'
        },
        {
            id: 5,
            image: '../Work_Page/assets/brands/5.jpg',
            descriptipn: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
            Brand_Name: 'Der Spiegel Cover Art',
            Brand_sphere: 'Business, Photography'
        },
        {
            id: 6,
            image: '../Work_Page/assets/brands/6.jpg',
            descriptipn: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
            Brand_Name: 'Art & Design Blvd',
            Brand_sphere: 'Art, Business'
        },
       {
        id:7,
        image:'../Work_Page/assets/brands/7.jpg',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
        Brand_Name:'Business Photography',
        Brand_sphere:'Business Photography'
       },
       {
        id:8,
        image:'../Work_Page/assets/brands/8.jpg',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
        Brand_Name:'Smash Pop Art Storm',
        Brand_sphere:'Business'
       },
       {
        id:9,
        image:'../Work_Page/assets/brands/9.jpg',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
        Brand_Name:'Adventures in Zonderland',
        Brand_sphere:'Business'
       },
       {
        id:10,
        image:'../Work_Page/assets/brands/10.jpg',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
        Brand_Name:'STV Music Awards 2013',
        Brand_sphere:' Photography '
       },
       {
        id:11,
        image:'../Work_Page/assets/brands/11.jpg',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
        Brand_Name:'Pale Skin Apparel',
        Brand_sphere:'Art,Photography'
       },
       {
        id:12,
        image:'../Work_Page/assets/brands/12.jpg',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
        Brand_Name:'Clash & Mayhem TV',
        Brand_sphere:'Art'
       },
    ]
    Brands.forEach((element) => {
        console.log(element);
        var Brand = document.createElement('div', key = this.id);
        var Brand_Img = document.createElement('img');
        var Brand_Info = document.createElement('div');
        Brand_Info.classList.add('Brand_Info')
        var Brand_Name = document.createElement('h3');
        var Brand_Sphere = document.createElement('span')
        Brand_Name.innerHTML = element.Brand_Name;
        Brand_Sphere.innerHTML = element.Brand_sphere;
        Brand_Img.src = element.image;
        Brand_Info.appendChild(Brand_Name);
        Brand_Info.appendChild(Brand_Sphere);
        Brand.appendChild(Brand_Info);
        Brand.appendChild(Brand_Img);
        Brand.classList.add('Brand');
        Brands_Box.appendChild(Brand);
    })
}
