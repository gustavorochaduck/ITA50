const maintence = document.createElement('div')
navigation.className = 'maintence';

navigation.innerHTML = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@100..900&family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet">

    <div class="root">
        <img src="/home_img/error_icon.jpeg" alt="c#" width="250px" height="250px">
        <p>Under maintenance...</p>
    </div>
    <style>
        body{
            background-color: black;
        }
        .root{
            align-self: center;
            height: 100%;
            width: 100%;
            display: grid;
            justify-content: center;
            align-content: center;
            color: whitesmoke;
            font-family: "Bitcount Grid Single", system-ui;
            font-size: 34px;
        }
        .root img{
            justify-self: center;
            align-self: center;
        }
    </style>
`;

document.body.prepend(maintence)
console.log(' maintence Loaded....')