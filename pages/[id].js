import fetch from "isomorphic-unfetch";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const postsUrl = `https://jsonplaceholder.typicode.com/posts`;
const getPostUrl = id => `${postsUrl}/${id}`;


const Post = ({
    post: { id, title, body },
}) => (
    <div>
        <Card>
            <CardContent >
                <Typography variant="body2" color="textSecondary" component="p">
                    {id}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    </div>
);


Post.getInitialProps = async ctx => {
    const { id } = ctx.query;
    const postResponse = await fetch(getPostUrl(id));
    const post = await postResponse.json();

    console.info(`post`, post);

    return { post };
};

export default Post;
