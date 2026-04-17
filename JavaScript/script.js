*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Inter',sans-serif;
}

body{
background:linear-gradient(135deg,#0f172a,#1e293b);
color:white;
scroll-behavior:smooth;
}

/* NAVBAR */

header{
position:fixed;
top:0;
width:100%;
background:rgba(0,0,0,.5);
backdrop-filter:blur(10px);
z-index:1000;
}

.navbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 10%;
}

.logo{
font-size:22px;
font-weight:700;
color:#38bdf8;
text-decoration:none;
}

.nav-links{
display:flex;
gap:25px;
list-style:none;
}

.nav-links a{
color:white;
text-decoration:none;
}

.hamburger{
display:none;
flex-direction:column;
cursor:pointer;
}

.hamburger span{
width:25px;
height:3px;
background:white;
margin:3px 0;
transition:0.3s;
}

.hamburger.active span:nth-child(1){
transform:rotate(-45deg) translate(-5px,6px);
}

.hamburger.active span:nth-child(2){
opacity:0;
}

.hamburger.active span:nth-child(3){
transform:rotate(45deg) translate(-5px,-6px);
}

.hero{
height:100vh;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
}

.hero-content{
display:flex;
align-items:center;
gap:50px;
max-width:1200px;
width:100%;
padding:0 10%;
}

.hero-text{
flex:1;
text-align:left;
}

.hero-image{
width:250px;
height:250px;
border-radius:50%;
object-fit:cover;
border:5px solid #38bdf8;
}

@media (max-width: 768px) {
.hero-content {
flex-direction: column;
text-align: center;
}
.hero-text {
text-align: center;
}
.hero-image {
width: 200px;
height: 200px;
}
}

.hero h1{
font-size:55px;
}

.gradient{
background:linear-gradient(90deg,#38bdf8,#818cf8);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.btn{
padding:12px 25px;
border-radius:30px;
background:#38bdf8;
color:white;
text-decoration:none;
margin:10px;
display:inline-block;
}

.section{
padding:120px 10%;
text-align:center;
}

.section-title{
font-size:40px;
margin-bottom:40px;
}

.about{
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
align-items:center;
}

.about img{
width:250px;
border-radius:20px;
}

.stats{
display:flex;
gap:40px;
margin-top:20px;
}

.stat-number{
font-size:35px;
color:#38bdf8;
}

.skills{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
}

.progress{
background:#1e293b;
height:10px;
border-radius:20px;
}

.progress-bar{
height:10px;
width:0%;
background:#38bdf8;
border-radius:20px;
transition: width 1s ease;
}

.projects-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:30px;
}

.project{
background:rgba(255,255,255,.05);
border-radius:15px;
overflow:hidden;
transition:.3s;
}

.project:hover{
transform:translateY(-10px);
}

.project img{
width:100%;
height: auto;
}

.project-content{
padding:20px;
text-align:left;
}

.contact{
max-width:500px;
margin:auto;
}

.social-links{
display:flex;
justify-content:center;
gap:20px;
}

.social-icon{
display:flex;
align-items:center;
justify-content:center;
width:50px;
height:50px;
background:#38bdf8;
color:white;
border-radius:50%;
text-decoration:none;
font-size:20px;
transition:.3s;
}

.social-icon:hover{
background:#2563eb;
transform:scale(1.1);
}

#topBtn{
position:fixed;
bottom:30px;
right:30px;
background:#38bdf8;
border:none;
padding:12px;
border-radius:50%;
display:none;
cursor:pointer;
}

.dark{
background:#020617;
}

.resume{
max-width:800px;
margin:auto;
text-align:left;
}

.resume-content{
display:grid;
gap:20px;
margin:20px 0;
}

.resume-item{
background:rgba(255,255,255,.05);
padding:20px;
border-radius:10px;
}

.resume-item h3{
color:#38bdf8;
margin-bottom:10px;
}

/* MOBILE RESPONSIVE */

@media (max-width: 768px) {
.navbar{
padding:20px 5%;
}

.nav-links{
position:fixed;
top:70px;
left:-100%;
width:100%;
height:calc(100vh - 70px);
background:rgba(0,0,0,.9);
flex-direction:column;
justify-content:center;
align-items:center;
gap:40px;
transition:0.3s;
z-index:999;
}

.nav-links.active{
left:0;
}

.hamburger{
display:flex;
}

.hero-content{
flex-direction:column;
text-align:center;
padding:0 5%;
}

.hero h1{
font-size:40px;
}

.hero-image{
width:200px;
height:200px;
}

.section{
padding:100px 5%;
}

.section-title{
font-size:30px;
}

.about{
grid-template-columns:1fr;
text-align:center;
}

.about img{
width:200px;
}

.skills{
grid-template-columns:1fr;
}

.projects-grid{
grid-template-columns:1fr;
}

.resume-content{
grid-template-columns:1fr;
}

.social-links{
gap:15px;
}

.social-icon{
width:45px;
height:45px;
font-size:18px;
}

#topBtn{
bottom:20px;
right:20px;
}
}

@media (max-width: 480px) {
.hero h1{
font-size:30px;
}

.hero-image{
width:150px;
height:150px;
}

.section-title{
font-size:25px;
}

.btn{
padding:10px 20px;
font-size:14px;
}

.about img{
width:150px;
}

.social-links{
gap:10px;
}

.social-icon{
width:40px;
height:40px;
font-size:16px;
}
}
