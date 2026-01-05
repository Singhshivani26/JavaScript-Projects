const getDataButton = document.getElementById("get-data-button");
const dataContainer = document.getElementById("data-container");

// Function to fetch and display posts
async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        const data = await response.json();

        dataContainer.innerHTML = ""; // Clear previous data
        data.forEach(post => {
            const postData = document.createElement("div");
            postData.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
            dataContainer.appendChild(postData);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
        dataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Function to create a new post
async function createPost() {
    const newPost = {
        title: "New Post",
        body: "This is a new post created using POST method",
        userId: 1,
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });
        const data = await response.json();
        console.log("Post created:", data);
    } catch (error) {
        console.error("Error creating post:", error);
    }
}

// Function to update an existing post
async function updatePost(postId) {
    const updatedPost = {
        title: "Updated Post Title",
        body: "This is an updated post body using PUT method",
    };

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPost),
        });
        const data = await response.json();
        console.log("Post updated:", data);
    } catch (error) {
        console.error("Error updating post:", error);
    }
}

// Function to delete a post
async function deletePost(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE",
        });
        if (response.ok) {
            console.log(`Post with ID ${postId} deleted successfully`);
        } else {
            throw new Error("Failed to delete post");
        }
    } catch (error) {
        console.error("Error deleting post:", error);
    }
}

// Event listener to fetch posts when the button is clicked
getDataButton.addEventListener("click", async () => {
    await fetchPosts();

    // Example usage of other methods
    await createPost();
    await updatePost(1); // Update post with ID 1
    await deletePost(1); // Delete post with ID 1
});
