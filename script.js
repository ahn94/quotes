document.addEventListener("DOMContentLoaded", function(event) { 

    fetch('https://spreadsheets.google.com/feeds/list/1FiJQgHZJ7MiyjARf5DPR9VhPKqKcrSphU7XAEPy5yjI/od6/public/values?alt=json')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(data => {
        // data
        let response = data.feed.entry;
        
        //sort by date
        response.sort(function(a, b) {
            return new Date(b.gsx$date.$t) - new Date(a.gsx$date.$t);
        })
        
        console.log(response);

        //formatted json
        q = {
            quote: response[0].gsx$quote.$t,
            author: response[0].gsx$author.$t
        }
        
        

        // html elements
        var quote = document.querySelector("#quote");
        var author = document.querySelector("#author");

        // Only add quote if author is available
        quote.innerHTML = q.quote;
        if (q.author.length > 0) {
            author.classList.add('is-visible');
            author.innerHTML = q.author
        } else {
            author.classList.remove('is-visible');
            author.innerHTML = q.author

        }

        
    })




  });

  window.addEventListener("load", function(){
    g = document.body
    var wrapper = document.getElementById('quote-wrapper');
    console.log(wrapper.clientHeight);
    console.log(wrapper.style.height);
    wrapper.style.height = g.clientHeight + "px";
    wrapper.style.width = g.clientHeight + "px";
    // console.log(wrapper.clientWidth);

    console.log(g.clientWidth)
    client.log(screen.height);
    client.log(screen.width);

    
});
