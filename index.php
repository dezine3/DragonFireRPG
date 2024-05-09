<!DOCTYPE html>
<html>
    <script src="scripts.js"></script>
    <script src="rpg.js"></script>
<head>
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <style>


</style>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <!-- sticky header content here -->
        <h1 class="fade-in ubuntu-bold">Patrick Britton</h1>
        <h2 class="ubuntu-light-italic">@ pbritton.dev</h2>
        <div id="nav" class="fade-in"><nav>
            <ul>
                <li><a href="#header">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#myModal" id="openModalLink">Sample Work</a></li>
            </ul>
        </nav></div>
    </header>
    
    <div class="container slide-down">
        <main>
            <!-- main content here -->
            <h2>Welcome to My Portfolio</h2>
            <section>
                <h3>Skills Overview</h3>
                <p>I am a highly experienced professional in the remote desktop support industry with over 15 years of experience. Throughout my career, I have gained expertise in various areas including:</p>
                <ul>
                    <li>Active Directory</li>
                    <li>Troubleshooting</li>
                    <li>Computer Repair</li>
                    <li>Printers</li>
                    <li>Remote Desktop</li>
                    <li>Windows</li>
                    <li>Microsoft Office Products</li>
                    <li>Linux Operating Systems</li>
                    <li>Windows Server</li>
                    <li>Linux Server</li>
                    <li>Apache</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>WordPress</li>
                    <li>Web Development</li>
                </ul>
                <p>I am passionate about providing efficient and reliable remote desktop support solutions to clients. With my extensive knowledge and skills, I am able to tackle complex technical issues and deliver exceptional results.</p>
            </section>
        </main>
        
        <aside>
            <!-- Add your sidebar content here -->
            <h3>About Me</h3>
            <p>Greetings, I am Patrick. It is a pleasure to have you here. Throughout the years, I have dedicated an immeasurable amount of time to the pursuit of computer science, acquiring a wealth of knowledge and expertise. In this journey, I have also had the privilege of guiding others in enhancing their technical skills. My fervent interests lie in the realms of web development, providing computer support, and engaging with the most current iterations of Windows and Linux operating systems.
            </p>
        </aside>
    </div>
    
    <footer>
        <!-- Add your footer content here -->
        <p>&copy; 2022 My Portfolio. All rights reserved.</p>
    </footer>

<!-- The Hidden Modal -->
<div id="myModal" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <h2>Sample Work</h2>
    <h5>Click here for more</h5>

<button class="accordion">JavaScript RPG</button>
<div class="panel section1">
  <p></p>
  <div class="panel-content">
  <div id="dragon">
    <img src="dragon-icon.png" alt="DragonFire RPG Logo" id="dragon"/>
    </div>
  <object data="rpg.html" height="300px" width="700px">
    Your browser doesn't support the object tag.
  </object>
  </div>
  
</div>

<button class="accordion">Section 2</button>
<div class="panel">
  <p>Description for Section 2.</p>
</div>

<button class="accordion">Section 3</button>
<div class="panel">
  <p>Description for Section 3.</p>
</div>

<button class="accordion">Section 4</button>
<div class="panel">
  <p>Description for Section 4.</p>
</div>

<button class="accordion">Section 5</button>
<div class="panel">
  <p>Description for Section 5.</p>
</div>
    <span class="close">close ×</span>

</div>
</div>


    
</body>
</html>