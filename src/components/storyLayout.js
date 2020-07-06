import React, { Component } from 'react'
import { graphql, Link } from "gatsby"
import SEO from "./seo"
import Layout from './layout'
import BackButton from './backButton'
import Story from "./story"

export default class storyLayout extends Component {
  
  constructor() {
    super()
    let postsToShow = 0;

    this.state = {
      postsToShow,
    }
  }

  componentDidMount(){

    const shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    // destructure and get our variables
    const {
      post: {
        html,
        frontmatter: { title, dom, slug, thumb },
      },
      site: {
        siteMetadata: { url, description },
      },
    } = this.props.data;

    const { posts } = this.props.data;

    shuffle(posts.edges);

  }

  render() {

    const handleView = () => {
      if(this.state.postsToShow < 10)
      {
        this.setState({ postsToShow: this.state.postsToShow + 2 })
      }
    }

    // destructure and get our variables
    const {
      post: {
        html,
        frontmatter: { title, dom, slug, thumb },
      },
      site: {
        siteMetadata: { url, description },
      },
    } = this.props.data;

    const { posts } = this.props.data;

      return (
        <Layout>
          <SEO title={title} description={description} keywords={[`great`, `british`, `dogs`]} />
          <BackButton page="article" link=""></BackButton> 
          <Story key={-1} title={title} dom={dom} thumb={thumb} html={html} url={url} slug={slug} mainArticle={true} handleView={handleView}></Story>
          {posts.edges.slice(0, this.state.postsToShow).map( (edge, index) => {

          if((edge.node.frontmatter.slug != slug) && (edge.node.frontmatter.title != 'advert'))
          {
            let showAd = false;
            if(index % 2 == 0)
            {
              showAd = true;
            }

           return (
            <Story key={index} showAd={showAd} title={edge.node.frontmatter.title} dom={edge.node.frontmatter.dom}  thumb={edge.node.frontmatter.thumb} html={edge.node.html} url={url} slug={edge.node.frontmatter.slug} mainArticle={false} handleView={handleView}></Story> 
           )

          }

         })}
          <Link to={`/share-your-story/`}>
            <div className="share-advert">
              <div className="share-story-advert-text">
                <b>Share</b> <i>your</i> <b>story</b> to win
              </div>
            </div>
          </Link>
          <br/>
          <br/>
        </Layout>
      )

  }
}

export const query = graphql`
  query StoryQuery($slug: String!) {
    site {
      siteMetadata {
        url
        description
      }
    }
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        date
        slug
        thumb
        dom
      }
    }
    posts: allMarkdownRemark (
      sort:{
        fields:id,
        order:ASC
      }
  ) {
      edges {
        node {
          html
          frontmatter {
            title
            subtitle
            date
            slug
            thumb
            dom
          }
        }
      }
    }
    
  }`