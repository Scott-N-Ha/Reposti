# ![Resposti](https://reposti.herokuapp.com/assets/favicon-9774141ed6dc147bb0786b9e3bd8df68655f79bdd3ae18da8713cc9eeef42e26.ico) [Reposti](https://reposti.herokuapp.com)
_A Tumblr Clone by Scott Ha_

## Description

Reposti is a full-stack project that utilizes a Rails server running with PostgreSQL as the backend and React/Redux as the frontend. It takes advantage of the Amazon S3 hosting services.

## Features

### **Creation of a Post of Varying Media Types**

On the main dashboard of the website, the user is presented with the option to create 1 of 7 post types at any moment.

![PostTypes](app/assets/images/github_screenshots/post_types.png)

By clicking on one of the available types of posts to create, you will be presented with the appropriate form.

_Text Form Example_

![TextPostForm](app/assets/images/github_screenshots/post_text_form.png)

_Video Form Example with Validation Error(s)_

![VideoPostForm](app/assets/images/github_screenshots/video_form.png)

### **Liking a Post**

Users can like a post that they enjoy.

_The Post before Like_

![LikeBefore](app/assets/images/github_screenshots/like_before.png)

_The Post after Like_

![LikeAfter](app/assets/images/github_screenshots/like_after.png)

Users can also then navigate to their [Likes](https://reposti.herokuapp.com/#/likes) page to view the posts they have previously liked.

### **Following and Unfollowing Other Users**

Users can follow and unfollow other users on the website and see their posts on the dashboard. The feaure is presented when looking at another user's page.


_Before Following Another User_

![FollowFollow](app/assets/images/github_screenshots/follow_follow.png)

_After Following Another User_

![FollowUnfollow](app/assets/images/github_screenshots/follow_unfollow.png)

## Best Code

### **Scroll To Top**

When a user has been browsing Reposti for a while, they can click the arrow button the shows up in the bottom right corner to jump to the top of the page.


_JavaScript/jQuery Functions_
```Javascript
function topFunction(){
  $('html,body').animate({ scrollTop: 0 }, 'slow');
}

function scroll(){
  const btn = document.querySelector('.top-btn');

  btn.style.display = document.body.scrollTop > 250 || document.documentElement.scrollTop > 250 ? "block" : "none";
}
```

_HTML Button_
```HTML
<i onClick={topFunction} className="fas fa-arrow-alt-circle-up top-btn rainbow-effect" style={{display: "none"}}></i>
```

## Future Features

- The ability to edit existing posts. Right now, the creator only has the option to delete the post. The Edit functionality is missing.
- See followers and follow them if wanted.
- Add fetching screens to webpages as it loads content.

## Code Shoutouts

### [Nathan Mendes](https://github.com/mendesnathanj)
- Assisted with a lot of Component Interactions
- Assisted with a lot of CSS design

### [Victoria Campbell](https://github.com/v-campbell)
- Rainbow Effect

### [Tony Ye](https://github.com/sionar)
- Validation Checking

### [Sara Sampson](https://github.com/sara-ls)
- Dropdown Menu Interaction

### [StackOverflow](https://stackoverflow.com/)
- Being there for me even more than my own father