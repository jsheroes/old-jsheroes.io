import Layout from '../app/components/Layout.js'
import fetch from 'isomorphic-unfetch'

const Post = props => (
  <Layout>
    <h1>Test</h1>
  </Layout>
) /*

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://www.omdbapi.com/?i=${id}`)
  const movie = await res.json()

  console.log(`Fetched movie: ${movie.Title}`)

  return { movie }
}*/

export default Post
