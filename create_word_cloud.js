

var tags = [
              ['teste1', 100],
              ['teste2', 50],
              ['teste3', 10]
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
            var tagElem;
            if (tags.some(function(el) { if (el[0] === tag) {tagElem = el; return true;} return false; })) {
            document.getElementById("details").innerText = "There were " + tagElem[1] + 
                " mentions of “" + tag + "” in the last year";
            }
          } else {
            document.getElementById("details").innerText = "";
          }
        }
        document.getElementById("cloud").addEventListener("click", clicked)