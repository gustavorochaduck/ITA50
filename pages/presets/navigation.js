const navigation = document.createElement('div')
navigation.className = 'navigation'
navigation.innerHTML =`
    <div class="navigation">
        <div class="nav_content">
            <a href="/index.html" class="home_icon"><img src="home_img/home_icon.jpg" alt="icon"></a>
            <a class="github" href="https://github.com/gustavorochaduck/ITA50">Github</a>
            <a class="teachers">Teachers</a>
            <a class="news">News</a>
        </div>
    </div>`

document.body.prepend(navigation)