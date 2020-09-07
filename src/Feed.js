import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender />

            <Post
                profilePic="https://avatars3.githubusercontent.com/u/16040759?s=460&u=beffe22e659bff0ddba2c9711576e5a787fb3a9f&v=4"
                message="Learn something new today"
                timestamp="Yesterday at 12:30PM"
                username="Dipendra Laxmi"
                image="https://dipendrachand.files.wordpress.com/2015/09/untitled-1b.jpg?w=584"
            />
            <Post
                profilePic="https://avatars3.githubusercontent.com/u/16040759?s=460&u=beffe22e659bff0ddba2c9711576e5a787fb3a9f&v=4"
                message="Learned something new yesterday"
                timestamp="Yesterday at 12:30PM"
                username="Dipendra Laxmi"
            />

        </div>
    )
}

export default Feed;
