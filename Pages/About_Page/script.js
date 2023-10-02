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
    var Brand_History_Data = [
        {
            id: 1,
            img: './assets/Quality_img/hand-made.png',
            description: `We have a number 
            of different teams within our agency 
            that specialise in different areas of businessoyoucan
             be sure that you won’t receive a generic service and 
             although we can’t boast years and years ofservice wecan
              ensure you that is a good thing in this industry.Our teams
               are up to date with the lates technologies.`,
        },
        {
            id: 2,
            img: './assets/Quality_img/2.png',
            description: `We have a number 
            of different teams within our agency 
            that specialise in different areas of businessoyoucan
             be sure that you won’t receive a generic service and 
             although we can’t boast years and years ofservice wecan
              ensure you that is a good thing in this industry.Our teams
               are up to date with the lates technologies.`,
        },
        {
            id: 3,
            img: './assets/Quality_img/3.png',
            description: `We have a number 
            of different teams within our agency 
            that specialise in different areas of businessoyoucan
             be sure that you won’t receive a generic service and 
             although we can’t boast years and years ofservice wecan
              ensure you that is a good thing in this industry.Our teams
               are up to date with the lates technologies.`,
        },
        {
            id: 4,
            img: './assets/Quality_img/4.png',
            description: `We have a number 
            of different teams within our agency 
            that specialise in different areas of businessoyoucan
             be sure that you won’t receive a generic service and 
             although we can’t boast years and years ofservice wecan
              ensure you that is a good thing in this industry.Our teams
               are up to date with the lates technologies.`,
        }
    ]
    var Brand_History_Box = document.getElementById('Brand_History_Box')
    Brand_History_Data.forEach((element) => {
        var Brand_History = document.createElement('div');
        Brand_History.classList.add('Brand_History');
        var Brand_History_Img_box = document.createElement('div');
        var Brand_History_Img = document.createElement('img');
        Brand_History_Img.src = element.img;
        var Brand_History_Description_box = document.createElement('div');
        var Brand_History_Description = document.createElement('p');
        var More_Description_Btn_Box = document.createElement('div');
        var More_Btn = document.createElement('button');
        More_Btn.classList.add('More_Btn');
        More_Btn.innerHTML = 'More';
        More_Description_Btn_Box.appendChild(More_Btn);
        Brand_History_Description.innerHTML = element.description;
        Brand_History_Description_box.appendChild(Brand_History_Description)
        Brand_History_Img_box.appendChild(Brand_History_Img);
        Brand_History.appendChild(Brand_History_Img_box);
        Brand_History.appendChild(Brand_History_Description_box);
        Brand_History.appendChild(More_Description_Btn_Box)
        Brand_History_Box.append(Brand_History);
    })
}