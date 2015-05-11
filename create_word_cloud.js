function processWordClouds() {
    $( ".smartconnect_wordcloud" ).each(function() {   
        console.log($(this).attr("data-processed"));
           
        if ($(this).attr("data-processed")) return;

        console.log('Setting wordclouds for '+$(this).attr("data-userid"));
        var cloud_dom_element = $(this).get(0);

        var relevantTermsRaw = $(this).attr("data-relevantterms");

        if (!relevantTermsRaw) 
            return;

        var relevantTerms = relevantTermsRaw.split(',');

        var tags = [];
        relevantTerms.slice(0,50).forEach(function(term) {
            splittedTerm = term.split('|');
            tags.push([splittedTerm[0],parseInt(splittedTerm[1])]);
        });

        var tags_list = tags.map(function(word) { return [word[0], Math.round(word[1]/3)]; })

        WordCloud(cloud_dom_element, {
          gridSize: 12, 
          weightFactor: 2, 
          rotateRatio: 0.5,
          list : tags_list, 
          wait: 10
        });

        $(this).attr("data-processed","true");  

        var clicked = function(ev) {
          if (ev.target.nodeName === "SPAN") {
            var tag = ev.target.textContent;

            window.location.href = "/"+tag.replace(' ','+');

          }
        }
        cloud_dom_element.addEventListener("click", clicked);
    });
}

processWordClouds();

$( window ).load(function() {
    processWordClouds();
});