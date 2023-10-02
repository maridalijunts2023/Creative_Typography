window.onload = function () {
    var Menu = document.getElementById('Menu');
    var Menu_Btn = document.getElementById('Menu_Btn');
    var Brands_Box = document.getElementById('Brands_Box');
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
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
            image: './Assets/Brands_Img/1.jpg',
            descriptipn: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
            Brand_Name: 'Stockholm Fashion',
            Brand_sphere: 'Art, Photography'
        },
        {
            id: 2,
            image: './Assets/Brands_Img/2.jpg',
            descriptipn: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
            Brand_Name: 'Berlin Design Week',
            Brand_sphere: 'Art, Business'
        },
        {
            id: 3,
            image: './Assets/Brands_Img/3.jpg',
            descriptipn: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
            Brand_Name: 'Venice Art Pavilion',
            Brand_sphere: 'Business'
        },
        {
            id: 4,
            image: './Assets/Brands_Img/4.jpg',
            descriptipn: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
            Brand_Name: 'Vimeo FX Showreel',
            Brand_sphere: 'Business'
        },
        {
            id: 5,
            image: './Assets/Brands_Img/5.jpg',
            descriptipn: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
            Brand_Name: 'Der Spiegel Cover Art',
            Brand_sphere: 'Business, Photography'
        },
        {
            id: 6,
            image: './Assets/Brands_Img/6.jpg',
            descriptipn: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nobis aut distinctio deserunt quas.',
            Brand_Name: 'Art & Design Blvd',
            Brand_sphere: 'Art, Business'
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

    // foreach-y pttvuma zangvaci meji sax andamneri vrayov u veragruma arjeqi
    // const array1 = ['a', 'b', 'c'];

    // array1.forEach((element) => console.log(element));
}
