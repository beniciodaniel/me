import React from "react";
import { Document } from "prismic-javascript/types/documents";
import { format, parseISO } from "date-fns";
import PrismicDOM from "prismic-dom";

import {
  Post,
  PostButton,
  PostText,
  PostImage,
  PostVideo,
} from "../styles/components/PostItem";

interface IPostItemProps {
  post: Document;
  showPostId: string;
  handleClickedPostVisualization(postId: string): void;
}

const PostItem: React.FC<IPostItemProps> = ({
  post,
  handleClickedPostVisualization,
  showPostId,
}) => {
  function handleVisualization(postId: string) {
    handleClickedPostVisualization(postId);
  }

  return (
    <Post postId={post.id} showPostId={showPostId}>
      <PostButton
        onClick={() => handleVisualization(post.id)}
        postId={post.id}
        showPostId={showPostId}
      >
        <span>{format(parseISO(post.data.postdate), "dd/MM/yyyy")}</span>
        <strong>{PrismicDOM.RichText.asText(post.data.title)}</strong>
      </PostButton>

      <PostText postId={post.id} showPostId={showPostId}>
        <span>{PrismicDOM.RichText.asText(post.data.text)}</span>
      </PostText>

      {post.data.thumbnail.list320.url && (
        <PostImage
          postId={post.id}
          showPostId={showPostId}
          src={post.data.thumbnail.list320.url}
          alt="Image"
        />
      )}

      {post.data.video.html && (
        <PostVideo
          postId={post.id}
          showPostId={showPostId}
          dangerouslySetInnerHTML={{
            __html: post.data.video.html,
          }}
        ></PostVideo>
      )}
    </Post>
  );
};

export default PostItem;
