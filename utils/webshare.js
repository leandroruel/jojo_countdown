import { FacebookShareButton, RedditShareButton, TwitterShareButton, LineShareButton, WhatsappShareButton } from 'react-share'
import { FacebookIcon, RedditIcon, TwitterIcon, LineIcon, WhatsappIcon } from 'react-share'

export default function SocialShareButtons(props) {
    return (
        <>
            <TwitterShareButton url={props.url} title={props.title} className="mr-2">
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <FacebookShareButton url={props.url} title={props.title} className="mr-2">
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <RedditShareButton url={props.url} className="mr-2 hidden md:inline">
                <RedditIcon size={32} round={true} />
            </RedditShareButton>
            <LineShareButton url={props.url} className="mr-2 hidden md:inline">
                <LineIcon size={32} round={true} />
            </LineShareButton>
            <WhatsappShareButton url={props.url}>
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
        </>
    )
}