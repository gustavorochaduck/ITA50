const navigation = document.createElement('div');
navigation.className = 'navigation';

navigation.innerHTML = `

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@100..900&family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet">
  <div class="nav_content">
    <a href="/index.html" class="home_icon">
      <img src="/home_img/home_icon.jpg" alt="icon">
    </a>
    <a class="github" href="https://github.com/gustavorochaduck/ITA50">Github</a>
    <a class="teachers" href="/pages/teachers/teachers.html">Teachers</a>
    <a class="news" href="/pages/news/news.html" >News</a>
  </div>
  <style>
    .navigation{
        justify-content: center;
        display: flex;
        background-color: rgb(36, 35, 40) ;
        padding: 1%;
        margin-bottom: 10em;
    }
    .nav_content{
        width: 100%;
        display: flex;
        justify-content: center;
        font-family: "Bitcount Grid Single", system-ui;
    }
    .nav_content a{
        color: whitesmoke;
        text-decoration: none;
        padding: 1%;
        transition: 1s;
        align-content: center ;
    }
    .nav_content a:hover{
        background-color: rgb(70, 68, 78);
        margin: 0;
        border-radius: 1em;
    }
    .home_icon{
        position: relative;
        inset-inline-start: inherit;
    }
    .home_icon img{
        padding: 0px;
        border-radius: 15%;
        width: 50px;
        height: 50px;   
    }
  </style>
`;

document.body.prepend(navigation);

console.log('Loaded...')