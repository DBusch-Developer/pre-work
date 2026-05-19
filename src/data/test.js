// Use fetch() to request data from the API URL.
fetch("https://jsonplaceholder.typicode.com/posts/")
  // Convert the response from the server into JavaScript data.
  .then((response) => response.json())
  // Use the data after it has been converted.
  .then((data) => {
    // Get only the first 5 posts from the array.
    const firstFivePosts = data.slice(0, 5);

    // Loop through each of the first 5 posts.
    firstFivePosts.forEach((post) => {
      // Display the title for each post.
      console.log("title:", post.title);

      // Display the body for each post.
      console.log("body:", post.body);
    });
  })
  // Catch and show any errors if something goes wrong.
  .catch((error) => {
    // Print the error message in the console.
    console.error("Error fetching data:", error);
  });
  