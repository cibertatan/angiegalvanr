import { BlogPost } from "@/constants/blogs";

export interface BlogCardProps {
    blog: BlogPost;
    onClick: () => void;
  }