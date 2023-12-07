import styles from './page.module.css'
import imgcss from './image.module.css'
import InputElement from './components/InputElement';

const  Home = async () => {
  const wikiImg="https://nkb-backend-otg-media-static.s3.ap-south-1.amazonaws.com/ccbp-dynamic-webapps/wiki-logo-img.png";
  
  return (
    <div className={styles.cardContainer}>
    <img className={imgcss.image} src={wikiImg} alt="nice"/>
    <InputElement/>
    
    </div>
  )
}

export default Home
