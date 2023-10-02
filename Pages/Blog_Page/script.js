window.onload = function () {
    var Blogs_Container = document.getElementById('Blogs_Container');
    var Menu = document.getElementById('Menu');
    var Menu_Btn = document.getElementById('Menu_Btn');
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
    var Blogs = [
        {
            img: [
                './assets/Blog_Img/Blog_1/1.jpg'
            ],
            name: 'Transitions In UX Design',
            description: `The term minimalism is also used to<br> 
            describe a trend in design and<br> 
            architecture where in the subject is<br>
            reduced to its necessary`,
            data: '04 October, 2013 / 2 Comments',
        },

        {
            img: [
                './assets/Blog_Img/Blog_2/1.jpg',
                './assets/Blog_Img/Blog_2/2.jpg',
            ],
            name: 'Transitions In UX Design',
            description: `The term minimalism is also used to<br> 
            describe a trend in design and<br> 
            architecture where in the subject is<br>
            reduced to its necessary`,
            data: '04 October, 2013 / 2 Comments',
        },
        {
            img: [

            ],
            music: './After Dark Instrumental - After Dark Instrumental.mp3',
            name: 'Josh Woodward – Already There',
            description: `The term minimalism is also used to<br> 
            describe a trend in design and<br> 
            architecture where in the subject is<br>
            reduced to its necessary`,
            data: '04 October, 2013 / 0 Comments',
        },
        {
            img: [
                './assets/Blog_Img/blog3/1.jpg',
            ],
            name: 'Recent trends in storytelling',
            description: `The term minimalism is also used to<br> 
            describe a trend in design and<br> 
            architecture where in the subject is<br>
            reduced to its necessary`,
            data: '04 October, 2013 / 0 Comments',
        },
        {
            img: [
            ],
            video: './assets/blog-video/videoplayback.mp4',
            name: 'Recent trends in storytelling',
            description: `The term minimalism is also used to<br> 
            describe a trend in design and<br> 
            architecture where in the subject is<br>
            reduced to its necessary`,
            data: '04 October, 2013 / 0 Comments',
        },
        {
            img: [
                './assets/Blog_Img/blog4/1.jpg',
                './assets/Blog_Img/blog4/2.jpg',
            ],
            name: 'Madrid’s photo marathon',
            description: `The term minimalism is also used to<br> 
            describe a trend in design and<br> 
            architecture where in the subject is<br>
            reduced to its necessary`,
            data: '04 October, 2013 / 0 Comments',
        },

        {
            data: '04 October, 2013 / 0 Comments',
            href_description: ' Unlocking Hidden Brain Secrets',
            href: 'sdjhbshdb'
        },
        {
            img: [
                './assets/Blog_Img/blog5/1.jpg',
            ],
            name: 'Secrets of Modern Science',
            description: `The term minimalism is also used to<br> 
            describe a trend in design and<br> 
            architecture where in the subject is<br>
            reduced to its necessary`,
            data: '04 October, 2013 / 0 Comments',
        },
        {
            data: '04 October, 2013 / 0 Comments',
            name: `Designers can create <br> normalcy out of <br>chaos;
             they can clearly<br> communicate ideas<br>
            through the<br> organising and<br>manipulating
             of words<br> and pictures.<br>
            — Jeffrey Veen – About Design`,
            href: 'sdjhbshdb'
        },
        {
            img: [

            ],
            music: './After Dark Instrumental - After Dark Instrumental.mp3',
            name: 'Josh Woodward – Already There Remix',
            description: `The term minimalism is also used to<br> 
            describe a trend in design and<br> 
            architecture where in the subject is<br>
            reduced to its necessary`,
            data: '04 October, 2013 / 0 Comments',
        },
        {
            data: '04 October, 2012 / 0 Comments',
            href_description: ` A Look Inside the Protein Bar `,
            href: 'sdjhbshdb'
        },
        {
            img: [
            ],
            video: './assets/blog-video/videoplayback.mp4',
            name: 'Recent trends in storytelling',
            description: `The term minimalism is also used to<br> 
            describe a trend in design and<br> 
            architecture where in the subject is<br>
            reduced to its necessary`,
            data: '04 October, 2013 / 0 Comments',
        },
        {
            img: [
                'assets/Blog_Img/blog7/1.jpg',
            ],
            name: 'Enterior Design Ideas',
            description: `The term minimalism is also used to<br> 
            describe a trend in design and<br> 
            architecture where in the subject is<br>
            reduced to its necessary`,
            data: '02 September, 2013 / 0 Comments',
        },
        {
            href_description: ` Art is the only serious<br> thing in the world.
            And the artist is the only person who is never serious.— Oscar Wilde `,
            data: '04 October, 2012 / 0 Comments',
            href: 'sdjhbshdb'
        },
    ]

    function DisplayGallery(blog) {
        if (!blog.img || blog.img.length === 0) {
            return null; // Если нет изображений, возвращаем null
        }

        var Swiper_Box = document.createElement('div');
        Swiper_Box.classList.add('Swiper_Box');

        blog.img.forEach(function (imageSrc) {
            var Swiper_Img = document.createElement('img');
            Swiper_Img.src = imageSrc;
            Swiper_Box.appendChild(Swiper_Img);
            if (blog.img.length > 1) {
                Swiper_Img.classList.add('swiper')
            }
        });

        return Swiper_Box;
    }

    Blogs.forEach((item) => {
        var Blog = document.createElement('div');
        Blog.classList.add('Blog');

        if (item.video) {
            var Video_Box = document.createElement('div');
            var Video = document.createElement('video');
            Video.setAttribute('controls', 'controls');
            Video_Box.appendChild(Video);
            Video.src = item.video;
            Blog.appendChild(Video_Box);
        }
        if (item.music) {
            var Music_Box = document.createElement('div');
            var Music = document.createElement('audio');
            Music.setAttribute('controls', 'controls');
            Music_Box.appendChild(Music);
            Music.src = item.music;
            Blog.appendChild(Music_Box);
        }
        if (item.href && item.href_description) {
            var Href_Box = document.createElement('div');
            var Href_Description = document.createElement('p');
            var Href = document.createElement('span');
            Href.innerHTML = '<i class="link_mark fa fa-link pull-left"></i>';
            Href_Description.innerHTML = item.href_description;
            Href_Box.appendChild(Href);
            Href_Box.appendChild(Href_Description)
            Blog.classList.add('active');
            Blog.appendChild(Href_Box);
        }

        var Blog_IMg_Box = DisplayGallery(item);
        if (Blog_IMg_Box) {
            Blog.appendChild(Blog_IMg_Box);
        }
        if (item.description) {
            var Description_Box = document.createElement('div');
            var Description = document.createElement('p');
            Description.innerHTML = item.description;
            Description_Box.appendChild(Description);
            Blog.appendChild(Description_Box);
        }
        if (item.name) {
            var Name_Box = document.createElement('div');
            var Name = document.createElement('span');
            Name.innerHTML = item.name;
            Name_Box.appendChild(Name);
            Blog.appendChild(Name_Box);
        }
        var Data_Box = document.createElement('div');
        var Data = document.createElement('span');
        Data.innerHTML = item.data;
        Data_Box.appendChild(Data);
        Blog.appendChild(Data_Box);
        Blogs_Container.appendChild(Blog);
    })
}

