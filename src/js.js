var requestURL ='../data/db.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function() {
    var receivedData = request.response;
    var data=JSON.parse(receivedData);
    tempdata=data;
    nprojects(data['notable_projects']);
    pprojects(data['popular_projects']);
    info(data['info']);   
    changebanner();
    date();
}
  
    var tempdata;
    var index=0;
    setInterval(changebanner, 3000);

    function changebanner() {   
        var data = tempdata['banners'];
        var image = document.getElementById("image");
        var text = document.getElementById("text");
        var textmore = document.getElementById("textmore");          
        var now = document.getElementById("now");
        var right = document.getElementById("right");
        var left = document.getElementById("left");
        right.setAttribute('onclick',function(){changebanner();});
        image.setAttribute("src", "../images/banner" + (index+1) + ".jpg");
        text.innerText=data[index].title;
        textmore.innerText=data[index].sub_title;
        now.innerHTML="<span style='color:white;'>"+(data[index].id+1)+"</span> / 4";
        document.getElementById('banner_text').style.color=data[index].text_color;
        index++;
        if (index >= 4) index = 0;
    }

    function nprojects(data){      
        var main_bottom = document.getElementById("main_bottom");
        for (i=0; i < data.length; i++){
           let nproject=document.createElement('div');
        main_bottom.appendChild(nproject);
        nproject.style.width="23%";
        nproject.style.padding="0% 1%";
        nproject.style.marginBottom="20px";
        nproject.style.display="inline-block";
        nproject.innerHTML="<div class='nproject'><img src='../images/notable_project"+(data[i].id+1)+".jpg'></img></div><dl><dd><span>"+data[i].category
         +"</span> | <span>"+data[i].creator+"</span></dd><dt><a href='"+data[i].url
         +"'><strong>"+data[i].title+"</strong></a></dt></dl><div class='percent'>"+data[i].sponsorship_rate+"% 달성</div>";
        }
    }

    function pprojects(data){      
        var box = document.getElementById("pproject");
        for (i=0; i < data.length; i++){
           let pproject=document.createElement('div');
           box.appendChild(pproject);
           pproject.innerHTML="<div class='pproject'><img src='../images/popular_project"+(data[i].id+1)+".jpg'></img></div><div class='productmore'>"+
           "<div class='no'>"+(data[i].id+1)+"</div><dl><dd><span>"+data[i].category+"</span> | <span>"+data[i].creator+"</span></dd><dt><a href='"+data[i].url
           +"'><strong>"+data[i].title+"</strong></a></dt><div class='percent'>"+data[i].sponsorship_rate+"% 달성</div></dl></div>";
       }
    }
    
    function info(data){      
        var box = document.getElementById("footer_m_left");
        for (i=0; i<data.length; i++){
            let span=document.createElement('span');
           box.appendChild(span);
           span.innerHTML="<strong>"+data[i].title+" </strong><span> "+data[i].text+" </span>";
          }
    }
  
    function date(){      
        var box = document.getElementById("date");
        let span=document.createElement("span");
        let today = new Date();   
        let year = today.getFullYear(); 
        let month = today.getMonth() + 1; 
        let date = today.getDate(); 
        let Hours = today.getHours(); 
        let min = today.getMinutes(); 

        span.innerText=('0'+year).slice(-2)+'.'+('0'+month).slice(-2)+'.'+('0'+date).slice(-2)+"  "+
        ('0'+Hours).slice(-2)+':'+('0'+min).slice(-2)+' 기준';
        box.appendChild(span);
    }
