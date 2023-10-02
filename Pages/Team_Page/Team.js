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

    Team_Data = [
        {
            img: './assets/Team_members/team-member-1.jpg',
            name: 'Harugi Takamoto, CEO',
            description: `We have a number of different teams within our agency that
             specialise in different areas of business so you can be
            sure that you won’t receive a generic service and although we
             can’t boast years and years of service we can ensure
            you that is a good thing in this industry. Our teams are up to date with
             the latest technologies.`
        },
        {
            img: './assets/Team_members/team-member-2.png',
            name: 'Myagi Nakamura, Founder',
            description: `We have a number of different teams within our agency that
             specialise in different areas of business so you can be
            sure that you won’t receive a generic service and although we
             can’t boast years and years of service we can ensure
            you that is a good thing in this industry. Our teams are up to date with
             the latest technologies.`
        },
        {
            img: './assets/Team_members/team-member-2.png',
            name: 'Myagi Nakamura, Founder',
            description: `We have a number of different teams within our agency that
             specialise in different areas of business so you can be
            sure that you won’t receive a generic service and although we
             can’t boast years and years of service we can ensure
            you that is a good thing in this industry. Our teams are up to date with
             the latest technologies.`
        },
    ]
    Social_Links_Data = [
        {
            icon: '<i class="fa-brands fa-twitter"></i>',
            link: 'https://twitter.com/QodeInteractive'
        },
        {
            icon: '<i class="fa-brands fa-pinterest"></i>',
            link: 'https://www.pinterest.com/qodeinteractive',
        },
        {
            icon: '<i class="fa-brands fa-behance"></i>',
            link: 'https://www.behance.net/qodeinteractive'
        }
    ]

    var Team_Container = document.getElementById('Team_Container');
    Team_Data.forEach(element => {
        var Team_Box = document.createElement('div');
        Team_Box.classList.add('Team_Box')
        var Team_Img_Box = document.createElement('div');
        var Team_Img = document.createElement('img');
        Team_Img.src = element.img;
        var Team_Name_Box = document.createElement('div');
        var Team_Name = document.createElement('h3');
        Team_Name.innerHTML = element.name
        var Team_Description_Box = document.createElement('div');
        var Team_Description = document.createElement('p');
        var Social_Links_Box = document.createElement('div');
        Social_Links_Box.classList.add('Social_Links_Box');
        Social_Links_Data.forEach((Data) => {
            var Social_Links = document.createElement('a');
            Social_Links.classList.add('Social_Links');
            Social_Links.innerHTML = Data.icon;
            Social_Links.href = Data.link;
            Social_Links_Box.appendChild(Social_Links);
        })

        Team_Description.innerHTML = element.description;
        Team_Img_Box.appendChild(Team_Img);
        Team_Name_Box.appendChild(Team_Name);
        Team_Box.appendChild(Team_Img_Box);
        Team_Box.appendChild(Team_Name_Box);
        Team_Description_Box.appendChild(Team_Description);
        Team_Box.appendChild(Team_Description_Box);
        Team_Box.appendChild(Social_Links_Box)
        Team_Container.appendChild(Team_Box);
    });
}