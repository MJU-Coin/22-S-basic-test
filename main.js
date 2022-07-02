const searchPage = document.querySelector('.searchPage')
const mainPage = document.querySelector('.pageView')

function opensearch(){
  searchPage.style.display = "flex";
  mainPage.style.display = 'none';
}

function closesearch(){
  searchPage.style.display = "none"
  mainPage.style.display = '';
}

function getTime(){
  var date = new Date()
  var Y = date.getFullYear();
  var M = date.getMonth()+1;
  var D = date.getDate();
  var H = date.getHours();
  var Min = date.getMinutes();
  var S = date.getSeconds();S
  M = (M < 10) ? "0" + M : M;
  D = (D < 10) ? "0" + D : D;
  H = (H < 10) ? "0"+H: H;
  Min = (Min < 10) ? "0" + Min: Min;
  S = (S < 10) ? "0" + S : S;


  var time = Y-2000 + '.' + M + '.' + D + ' ' + H + ':' + Min + ':' + S;
  document.getElementById('clock').innerText = time;
  document.getElementById('clock').textContent = time;
  setTimeout(getTime, 1000)
}

getTime()


var banner = document.querySelector('#banner');
var notable = document.querySelector('#noteableProjects');
var popular = document.querySelector('#popularProjects');
var requestURL = 'data/db.json';
var request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = 'json';
request.send();

request.onload = function(){
  var projects = request.response;
  makebanner(projects);
  makeNoteableProjects(projects);
  makePopularProjects(projects);
}

function makebanner(jsonObj){
  var banners = jsonObj['banners']
  for (var i = 0; i < banners.length; i++){
    var Bannertitle = document.createElement('h1');
    var subtitle = document.createElement('p');
    Bannertitle.textContent = banners[i].title;
    subtitle.textContent = banners[i].sub_title;
    Bannertitle.style.color = banners[i].text_color;
    subtitle.style.color = banners[i].text_color;
    banner.appendChild(Bannertitle);
    banner.appendChild(subtitle);
  }
}
function makeNoteableProjects(jsonObj){
  var notable_projects = jsonObj['notable_projects']
  for (var j = 0; j < notable_projects.length; j++){
    var notable_image = document.createElement('img')
    if (j === 0){
      notable_image.src = 'images/notable_project1.jpg'
    } else if (j === 1){
      notable_image.src = 'images/notable_project2.jpg'
    } else if (j === 2){
      notable_image.src = 'images/notable_project3.jpg'
    } else if (j === 3){
      notable_image.src = 'images/notable_project4.jpg'
    } else if (j === 4){
      notable_image.src = 'images/notable_project5.jpg'
    } else if (j === 5){
      notable_image.src = 'images/notable_project6.jpg'
    } else if (j === 6){
      notable_image.src = 'images/notable_project7.jpg'
    } else if (j === 7){
      notable_image.src = 'images/notable_project8.jpg'
    }

    var notable_project_container = document.createElement('div')
    notable.appendChild(notable_project_container)
    var id = j;
    var title = document.createElement('p');
    var category = document.createElement('span');
    var rate = document.createElement('p');
    var creator = document.createElement('span')
    var notableimagecontainer = document.createElement('div')
    notableimagecontainer.setAttribute('class', 'imagecontainer')
    title.textContent = notable_projects[j].title;
    category.textContent = notable_projects[j].category + ' ㅣ '
    creator.textContent = notable_projects[j].creator
    rate.textContent = notable_projects[j].sponsorship_rate + '% 달성';
    rate.style.color = 'red';
    notable.style.lineHeight = '1.0'
    notable_project_container.appendChild(notableimagecontainer)
    notableimagecontainer.appendChild(notable_image)
    notable_project_container.appendChild(category);
    notable_project_container.appendChild(creator)
    notable_project_container.appendChild(title);
    notable_project_container.appendChild(rate);
  }
}

function makePopularProjects(jsonObj){
  var popular_projects = jsonObj['popular_projects']
  for (var k = 0; k < popular_projects.length; k++){
    var popular_image = document.createElement('img')
    if (k === 0){
      popular_image.src = 'images/popular_project1.jpg'
    } else if (k === 1){
      popular_image.src = 'images/popular_project2.jpg'
    } else if (k === 2){
      popular_image.src = 'images/popular_project3.jpg'
    } else if (k === 3){
      popular_image.src = 'images/popular_project4.jpg'
    } else if (k === 4){
      popular_image.src = 'images/popular_project5.jpg'
    } else if (k === 5){
      popular_image.src = 'images/popular_project6.jpg'
    } else if (k === 6){
      popular_image.src = 'images/popular_project7.jpg'
    } else if (k === 7){
      popular_image.src = 'images/popular_project8.jpg'
    }    
    var popular_project_container = document.createElement('div')
    popular.appendChild(popular_project_container)
    var popular_image_container = document.createElement('div')
    popular_image_container.setAttribute('class', 'imagecontainer');
    var popular_project_info = document.createElement('div')
    var id = k+1;
    var popular_title = document.createElement('p');
    var popular_category = document.createElement('span');
    var popular_creator = document.createElement('span')
    var popular_rate = document.createElement('p');
    var pid = document.createElement('p')
    pid.textContent = id
    if (id in [1, 2, 3, 4]){
      pid.style.color='red'
    }
    popular_title.textContent = popular_projects[k].title;
    popular_category.textContent = popular_projects[k].category + 'ㅣ'
    popular_creator.textContent =  popular_projects[k].creator;
    popular_rate.textContent = popular_projects[k].sponsorship_rate + '% 달성';
    popular_rate.style.color = 'red';
    popular.style.lineHeight = '1.0'
    popular_image_container.appendChild(popular_image)
    popular_project_container.appendChild(popular_image_container)
    popular_project_container.appendChild(pid)
    popular_project_container.appendChild(popular_project_info)
    popular_project_info.appendChild(popular_category)
    popular_project_info.appendChild(popular_creator)
    popular_project_info.appendChild(popular_title)
    popular_project_info.appendChild(popular_rate)
  }
}

