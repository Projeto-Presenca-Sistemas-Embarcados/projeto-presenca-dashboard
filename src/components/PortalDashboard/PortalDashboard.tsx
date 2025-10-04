import { type JSX } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import IconUva from '../IconUva/IconUva'
import teacherImg from '../../assets/homemTerno.png'
import './PortalDashboard.css'

export default function PortalDashboard(): JSX.Element {
    return (
        <section className="portal-dashboard">
            <header className="portal-header">
                <SearchBar placeholder="" />
                <div className="portal-top-right">
                    <IconUva />
                </div>
            </header>

            <div className="portal-main">
                <h1>
                    Bem-vindo(a) ao Sistema,<br />
                    Professor(a)!
                    </h1>
                <img src={teacherImg} alt="Professor" className="portal-teacher" />
            </div>
        </section>
    )
}