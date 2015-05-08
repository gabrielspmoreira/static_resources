
// http://wowmotty.blogspot.com.br/2010/04/get-parameters-from-your-script-tag.html

$( ".smartconnect_wordcloud" ).each(function() {
    console.log($(this).attr("data-id"));
    cloud_dom_element = $(this).get(0);

    relevantTermsRaw = $(this).attr("data-relevantterms");

    if (!relevantTermsRaw) 
        return;

    relevantTerms = relevantTermsRaw.split(',');

    var tags = [];
    relevantTerms.slice(0,50).forEach(function(term) {
        splittedTerm = term.split('|');
        tags.push([splittedTerm[0],parseInt(splittedTerm[1])]);
    });

    tags_list = tags.map(function(word) { return [word[0], Math.round(word[1]/2)]; })
    console.log(tags_list);

    WordCloud(cloud_dom_element, {
      gridSize: 12, 
      weightFactor: 2, 
      rotateRatio: 0.5,
      list : tags_list, 
      wait: 10
    });


    var clicked = function(ev) {
      if (ev.target.nodeName === "SPAN") {
        var tag = ev.target.textContent;

        window.location.href = "http://d-coder.smartcanvas.com/"+tag.replace(' ','+');

      }
    }
    cloud_dom_element.addEventListener("click", clicked);
});