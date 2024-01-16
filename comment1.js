document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");
  
    commentForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const commentText = document.getElementById("comment").value;
  
      if (commentText.trim() !== "") {
        const commentItem = createCommentItem(commentText);
        commentList.appendChild(commentItem);
  
        // Clear the textarea
        document.getElementById("comment").value = "";
      }
    });
  
    function createCommentItem(commentText) {
      const commentItem = document.createElement("li");
      commentItem.className = "comment";
  
      const commentHeader = document.createElement("div");
      commentHeader.className = "comment-header";
  
      const commentAuthor = document.createElement("div");
      commentAuthor.className = "comment-author";
      const authorAvatar = document.createElement("img");
      authorAvatar.src = "WhatsApp Image 2023-11-28 at 11.05.39 AM.jpeg"; // Add the path to your user's avatar
      authorAvatar.alt = "Username";
      commentAuthor.appendChild(authorAvatar);
  
      const authorName = document.createElement("span");
      authorName.textContent = "Aakash Sharma"; // Add the author's name
      commentAuthor.appendChild(authorName);
  
      const commentTime = document.createElement("span");
      commentTime.className = "comment-time";
      const now = new Date();
      commentTime.textContent = formatCommentTime(now);
      commentAuthor.appendChild(commentTime);
  
      commentHeader.appendChild(commentAuthor);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        commentItem.remove();
      });
  
      commentHeader.appendChild(deleteButton);
  
      commentItem.appendChild(commentHeader);
  
      const commentTextElement = document.createElement("p");
      commentTextElement.className = "comment-text";
      commentTextElement.textContent = commentText;
      commentItem.appendChild(commentTextElement);
  
      return commentItem;
    }
  
    function formatCommentTime(time) {
      const options = { hour: "numeric", minute: "numeric", second: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(time);
    }
  });
  