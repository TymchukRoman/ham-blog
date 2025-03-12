import { Box } from '@mui/material';
import posts from "../data/posts"
import Post from './Post';

function Content() {

    return <Box className="overflow-y-auto h-full flex flex-col gap-3 justify-start items-center no-scroll">
        {posts.map((post, index) => <Post key={index} post={post} />)}
    </Box>
}

export default Content
