import React from "react"
import Layout from "../components/layout"

class TodoPage extends React.Component {
  render() {
    const siteTitle = "The Broke Budget"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>List of things to fix</h1>
        <ol>
          <li> Most recent articles labeled as “read more“ category at the right side of each article that is open.</li>
          <li>“You may also like” section at the bottom of each open article to direct to related articles.</li>
          <li>Top navigation bar to have a home page, all articles page, the Broke Budget Plan page (this would be the step by step articles in order. the name can be adjusted later), about page and not necessarily in that order though.</li>
          <li><strong><span role="img" aria-label="checkmark">✅</span> DONE</strong> My short bio that is at the end of each article. Can we change that to just say “written by Brittany White-Her”. At the moment I have no qualifications or certifications that would make that look good as a financial coach so I’d rather just have it simple with just my name.</li>
          <li>Link to our future Facebook page would be cool at the top of every page. A share to Facebook Button on each article At the bottom would be cool too but I don’t know how easy that is for you.</li>
          <li>A search bar in the top right hand corner would be helpful too.</li>
          <li><strong><span role="img" aria-label="checkmark">✅</span> DONE</strong> As we talking about earlier try to make the dates of published articles just be month and year. Exclude the actual day.</li>
        </ol>
        
        <p> I think it should also include a thumbnail picture of something for each article. I know we talking about not just putting meaningless photos in each post but I think that a thumbnail on the list of articles will grab peoples attention more. It doesn’t have to be included as a giant image in the actual article though. Right now it’s so plain it’s hard to focus on what the titles and descriptions even are. Especially for a creative visual person like me <span role="img" aria-label="lol emoji">😂</span>.</p>
        
        <p>I'm using <a href="https://www.nerdwallet.com/" target="_blank">NerdWallet.com</a> as my inspiration for the design of the website. They did something cool with the pages where they are divided by topic too (credit card, banking, investing, mortgage, loans, insurance, money, travel). Idk if that is something we should do or not cause most of the pages they have we wouldn’t not be touching on. But it is a good website to look at as far as navigation.</p>
      </Layout>
    )
  }
}

export default TodoPage