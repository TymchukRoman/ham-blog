import { Card, Typography } from '@mui/material'

type Post = {
    title: string
    images: { id: number, src: string }[],
    content: string;
}

function Post(props: { post: Post }) {

    return <div className='max-w-128'>
        <Card className="w-full p-4 flex flex-col gap-4">
            <Typography variant="h4">{props.post.title}</Typography>
            {props.post.images.map((image, index) => <img key={index} src={image.src} alt={image.src} />)}
            <Typography variant="body1">{props.post.content}</Typography>
        </Card>
    </div>
}

export default Post
