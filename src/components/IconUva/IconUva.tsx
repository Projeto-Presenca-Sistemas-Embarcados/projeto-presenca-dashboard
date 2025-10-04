interface Props { size?: number }
import uvaIcon from '../../assets/logoUva.png';
import './IconUva.css'

export default function IconUva({ size = 40 }: Props) {
    return (
        <div className="icon-instituicao" style={{ width: size, height: size }}>
            <img src={uvaIcon} alt="UVA" />
        </div>
     ); 
}