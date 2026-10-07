import './content.css';
import video from '../assets/shape-showreel-2024_looping-v3.mp4';

function Content() {
  return (
    <div>
      <div>
       <video
  src={video}
  autoPlay
  loop
  muted
  playsInline
  style={{
  
    objectFit: "cover"
  }}
/>
      </div>

      <div className="content2">
        <ul id="ques">
          <li>Who we are?</li>
        </ul>

        <strong>
          An independent web design and branding agency in Manchester
        </strong>
      </div>

      <span>About Shape</span>
      <span>Meet Shape</span>
    </div>
  );
}

export default Content;