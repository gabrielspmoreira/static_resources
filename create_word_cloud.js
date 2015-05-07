

var tags = [
              ['devops', 100],
              ['carros', 50],
              ['startup', 10]
             ];

        /*wordCount.forEach(function(d) {
          tags.push([d.key,parseInt(d.values)]);
        });*/

        tags = tags.slice(0,50);

        WordCloud(document.getElementById('cloud'), {
          gridSize: 12, 
          weightFactor: 2, 
          rotateRatio: 0.5,
          list : tags.map(function(word) { return [word[0], Math.round(word[1]/2)]; }), 
          wait: 10
        });


        //console.log(tags.map(function(word) { return [word[0], Math.round(word[1]/2)]; }));
        //console.log(tagMap);
        
        var clicked = function(ev) {
          if (ev.target.nodeName === "SPAN") {
            var tag = ev.target.textContent;

            window.location.href = "http://d-coder.smartcanvas.com/"+tag;

          }
        }
        document.getElementById("cloud").addEventListener("click", clicked)