document.addEventListener("DOMContentLoaded", function(event) { 

    fetch('https://spreadsheets.google.com/feeds/list/1FiJQgHZJ7MiyjARf5DPR9VhPKqKcrSphU7XAEPy5yjI/od6/public/values?alt=json')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(data => {
        // data
        let response = data.feed.entry;
        
        //sort by date
        response.sort(function(a, b) {
            return new Date(a.gsx$date.$t) - new Date(b.gsx$date.$t);
        })

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