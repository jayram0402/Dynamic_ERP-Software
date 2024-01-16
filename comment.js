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
  
      const commentActions = document.createElement("div");
      commentActions.className = "comment-actions";
  
      const likeButton = document.createElement("button");
      likeButton.textContent = "Like";
      likeButton.addEventListener("click", function () {
        alert("Liked!");
      });
      commentActions.appendChild(likeButton);
  
      const replyButton = document.createElement("button");
      replyButton.textContent = "Reply";
      replyButton.addEventListener("click", function () {
        toggleReplyForm(commentReplyForm);
      });
      commentActions.appendChild(replyButton);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        commentItem.remove();
      });
      commentActions.appendChild(deleteButton);
  
      commentHeader.appendChild(commentActions);
  
      commentItem.appendChild(commentHeader);
  
      const commentTextElement = document.createElement("p");
      commentTextElement.className = "comment-text";
      commentTextElement.textContent = commentText;
      commentItem.appendChild(commentTextElement);
  
      const commentReplyForm = document.createElement("form");
      commentReplyForm.className = "comment-reply-form";
      commentReplyForm.innerHTML = `
        <label for="comment-reply">Reply:</label>
        <textarea id="comment-reply" name="comment-reply" rows="3"></textarea>
        <button type="submit">Send</button>
      `;
      commentItem.appendChild(commentReplyForm);
  
      commentReplyForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const replyText = commentReplyForm.querySelector("#comment-reply").value;
        if (replyText.trim() !== "") {
          const replyItem = createCommentItem(replyText);
          commentItem.appendChild(replyItem);
          toggleReplyForm(commentReplyForm);
        }
      });
  
      return commentItem;
    }
  
    function toggleReplyForm(replyForm) {
      replyForm.style.display = replyForm.style.display === "none" ? "block" : "none";
    }
  
    function formatCommentTime(time) {
      const options = { hour: "numeric", minute: "numeric", second: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(time);
    }
  });
  