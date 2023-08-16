import { none } from '@cloudinary/url-gen/qualifiers/fontHinting';
import style from './Button.module.css';
import Loader from '../PassportPhoto/Loader';

const Button = ({text, submitHandler, loader}) => {
    return (
        <button className={style.glowOnHover} onClick={submitHandler} disabled={loader ? true : false} style={{cursor : (loader ? 'not-allowed' : 'pointer')}} type="button">{loader ? <Loader /> : text}</button>
    )
}
export default Button;